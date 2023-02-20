import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// server side
export const loader: LoaderFunction = () => {
  return {
    message: "Hello films page",
  };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: "styles" }];
};

export const meta: MetaFunction = () => ({
  title: "Films | Studio Ghibli",
  descriptions: "Ghibli Collections App - List of films",
});

export default function FilmsIndex() {
  const data = useLoaderData();
  return <div>Msg: {data?.message}</div>;
}
