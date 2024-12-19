type VideoGridItemsProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  thumbnailUrl: string;
  videoUrl: string;
};

export function VideoGridItem({}: VideoGridItemsProps) {}
