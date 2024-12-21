'use client'


interface ImageOrComponentProps {
  content: React.ReactNode | string[];
  carousel: boolean;
};

export function ImageOrComponent({ content, caruosel }: ImageOrComponentProps) {
  const isStringArray = Array.isArray(project.content);

  if (isStringArray) {
    const images = content as string[];
    if (caruosel) {
      return (
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-64 md:h-96">
                    <Image 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`} 
                      layout="fill"
                      objectFit="scale-down"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
      );
    }

    return (
      <div>
        <Image
          src={images[0]}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-48 object-scale-down"
        />
      </div>
    );
  } 
  return <div>{project.content}</div>;
}
