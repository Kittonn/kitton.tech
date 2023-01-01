import { HeadPropsI } from "@interfaces/head";

export default function DefaultHead({ title, description }: HeadPropsI) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
    </>
  );
}
