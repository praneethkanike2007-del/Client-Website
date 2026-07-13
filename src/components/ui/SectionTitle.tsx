type SectionTitleProps = {
  badge?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  badge,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {badge && (
        <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#D4AF37]">
          {badge}
        </p>
      )}

      <h2 className="mt-3 text-4xl md:text-5xl font-bold text-black">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg leading-8 text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}