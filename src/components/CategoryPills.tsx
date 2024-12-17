import { Button } from "./Button";

type CategoryPillsProps = {
  categories: string[];
};

export function CategoryPills({ categories }: CategoryPillsProps) {
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        {categories.map((category) => (
          <Button
            key={category}
            variant="dark"
            className="py-1 px-3 rounded-lg whitespace-nowrap "
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
