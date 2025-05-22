import { redirect } from "@sveltejs/kit";

export function createMyLibraryRedirectFunction(url: string = "/") {
  return redirect(302, url);
}
