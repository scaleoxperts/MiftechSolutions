import ImageGallerySection from "./ImageGallerySection";

const certificates = [
  { src: "/images/certificates/CE_MARKING_OF_EU_MIFTECH_SOLUTIONS_page-0001.jpg", alt: "Certificate 1" },
  { src: "/images/certificates/ISO_14001_OF_EU_MIFTECH_SOLUTIONS_page-0001.jpg", alt: "Certificate 2" },
  { src: "/images/certificates/MIFTECH_SOLUTIONS_9001_final_page-0001.jpg", alt: "Certificate 3" },
  { src: "/images/certificates/ROHS_OF_EU_MIFTECH_SOLUTIONS_page-0001.jpg", alt: "Certificate 4" },
];
export default function Certificates() {
  return (
    <ImageGallerySection
      title="Our Certifications"
      images={certificates}
      sectionClassName="py-16 bg-white"
      gridClassName="grid grid-cols-1 md:grid-cols-3 gap-8"
      imageWrapperClassName="bg-gray-100 p-4 rounded-lg shadow-md flex justify-center items-center"
      imageWidth={300}
      imageHeight={400}
    />
  );
}
// C:\Users\NAVEEN KUMAR\Documents\devweb\learning_scaleoxperts\MiftechSolutions\public\images\
// public\images\certificates\ISO_14001_OF_EU_MIFTECH_SOLUTIONS_page-0001.jpg
// public\images\certificates/MIFTECH_SOLUTIONS_9001_final_page-0001.jpg
// public\images\certificates/ROHS_OF_EU_MIFTECH_SOLUTIONS_page-0001.jpg