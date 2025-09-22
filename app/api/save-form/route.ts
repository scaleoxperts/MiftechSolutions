import { getSheetsClient } from "@/utils/googleSheets";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const FormDataProp = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string().min(10).max(15),
    message: z.string().optional().default("NO-MESSAGE"),
});

export type FormData = z.infer<typeof FormDataProp>;

function formatDate(date: Date): string {
    return date.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log(body);

        const parsed = FormDataProp.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { success: false, error: parsed.error.flatten() },
                { status: 400 }
            );
        }

        const data = parsed.data;
        const sheets = await getSheetsClient();

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID!,
            range: "Sheet1!A:E",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [
                        data.name,
                        data.phone,
                        data.email,
                        data.message,
                        formatDate(new Date()),
                    ],
                ],
            },
        });

        return NextResponse.json({ success: true });
    } catch (err: unknown) {
        console.error("Error in save-form route:", err);
        if (err instanceof Error) {
            return NextResponse.json(
                { success: false, error: err.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { success: false, error: "An unknown error occurred" },
            { status: 500 }
        );
    }
}
