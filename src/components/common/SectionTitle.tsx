type SectionTitleProps = {
  subtitle: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}