interface Teammmate {
  title: string;
  proff?: string;
  description?: string;
  avatar?: string;
}
export const ServiceTeammate = ({ data }: { data: Teammmate }) => {
  return (
    <article className="teammate">
      <h1>{data.title}</h1>
    </article>
  );
};
