export const TitleText = ({text, style}: {text: string, style?:string}) => {
  return (
    <h1 className={`"text-2xl font-bold tracking-tight text-gray-900 dark:text-white" ${style}`}>
      {text}
    </h1>
  );
}