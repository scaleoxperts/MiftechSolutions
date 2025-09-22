import Image from "next/image";
import { Gotu } from "next/font/google";

const gotu = Gotu({ subsets: ["latin"], weight: "400" });

type ImageItem = {
  src: string;
  alt: string;
};

interface ImageGallerySectionProps {
  title: string;
  images: ImageItem[];
  sectionClassName: string;
  gridClassName: string;
  imageWrapperClassName: string;
  imageWidth: number;
  imageHeight: number;
}

export default function ImageGallerySection({
  title,
  images,
  sectionClassName,
  gridClassName,
  imageWrapperClassName,
  imageWidth,
  imageHeight,
}: ImageGallerySectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center text-[#087dc0] mb-12 ${gotu.className}`}
        >
          {title}
        </h2>
        <div className={gridClassName}>
          {images.map((image, index) => (
            <div key={index} className={imageWrapperClassName}>
              <Image
                src={image.src}
                alt={image.alt}
                width={imageWidth}
                height={imageHeight}
                className="rounded-md object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}