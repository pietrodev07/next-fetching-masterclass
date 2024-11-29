type CardProps = { title: string; body: string };

export const Card = ({ title, body }: CardProps) => {
  return (
    <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-4">
      <h2 className="font-semibold">{title}</h2>
      <p className="mt-2 text-neutral-400">{body}</p>
    </div>
  );
};
