export const SvgFromText = ({ text }: { text: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
};
