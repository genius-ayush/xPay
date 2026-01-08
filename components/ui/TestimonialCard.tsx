import Image from "next/image";

export function TestimonialCard({
  text,
  name,
  role,
  avatar,
}: {
  text: string;
  name: string;
  role: string;
  avatar: string;
}) {
  return (
    <div className="relative w-[380px] shrink-0 rounded-2xl bg-white p-6 shadow-sm">
      {/* Quote icon */}
      <div className="mb-4 text-4xl font-bold text-blue-500">“</div>

      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
        {text}
      </p>

      <div className="flex items-center gap-3">
        <Image
          src={avatar}
          alt={name}
          width={36}
          height={36}
          className="rounded-full"
        />
        <div>
          <div className="text-sm font-medium">{name}</div>
          <div className="text-xs text-muted-foreground">{role}</div>
        </div>
      </div>
    </div>
  );
}