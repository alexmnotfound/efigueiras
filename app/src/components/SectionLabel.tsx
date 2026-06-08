interface SectionLabelProps {
  text: string;
  centered?: boolean;
}

export function SectionLabel({ text, centered = false }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-[13px] font-semibold leading-[1.4] tracking-[0.12em] uppercase text-coach-accent mb-5 ${
        centered ? 'text-center' : ''
      }`}
    >
      {text}
    </span>
  );
}
