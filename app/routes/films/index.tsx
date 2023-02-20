import type { LinksFunction, MetaFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: "styles" }];
};

export const meta: MetaFunction = () => ({
  title: "Films | Studio Ghibli",
  descriptions: "Ghibli Collections App - List of films",
});

export default function FilmsIndex() {
  return <div>Films</div>;
}
