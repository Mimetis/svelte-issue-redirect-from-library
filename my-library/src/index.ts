import { redirect } from "@sveltejs/kit";

export function createMyLibraryRedirectFunction(url: string = "/") {
  redirect(302, url);
}
