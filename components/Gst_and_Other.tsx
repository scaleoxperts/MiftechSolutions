import ImageGallerySection from "./ImageGallerySection";

const gstImages = [
  { src: "/images/Gst_and_Other/SEA-RAN_page-0001.jpg", alt: "SEA-RAN" },
  { src: "/images/Gst_and_Other/GST-FILE_page-0001.jpg", alt: "GST Certificate1" },
  { src: "/images/Gst_and_Other/GST-FILE_page-0002.jpg", alt: "GST Certificate2" },
  { src: "/images/Gst_and_Other/GST-FILE_page-0003.jpg", alt: "GST Certificate3" },
];
export default function GstAndOther() {
  return (
    <ImageGallerySection
      title="GST & Other Compliance"
      images={gstImages}
      sectionClassName="py-16 bg-[var(--linen)]/40"
      gridClassName="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center"
      imageWrapperClassName="bg-white p-4 rounded-lg shadow-md flex justify-center items-center"
      imageWidth={400}
      imageHeight={300}
    />
  );
}

// public\images\Gst_and_Other/SEA-RAN_page-0001.jpg
// public\images\Gst_and_Other/GST-FILE_page-0001.jpg
// public\images\Gst_and_Other/GST-FILE_page-0002.jpg
// public\images\Gst_and_Other/GST-FILE_page-0003.jpg