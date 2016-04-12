/**
 * Handles client-side routing.
 * See https://github.com/visionmedia/page.js
 */
import page from 'page.js';

/**
 * Add leading slash to base-relative urls, as required by Page.js
 *
 * @param {string} path
 */
function normalise(path) {
  if(path.match(/^(http|https):\/\//)) {
    // Use anchor to parse this url
    const anchor = document.createElement('a');
	  anchor.href = path;

    // Validate: Same hostname
    if(window.location.host !== anchor.host) {
      return path;
    }

    // Validate: Same base path
    const base = page.base();
    if(!base || anchor.pathname.startsWith(base)) {
      // Convert root-relative link to base-relative
      // and continue processing below
      path = anchor.pathname.substring(base.length);
    } else {
      // Not same base : allow to do full page refresh
      return path;
    }
  }

  // Ensure url leads with '/' as expected by page.js
  if(path.startsWith('/')) {
    return path;
  }
  return `/${path}`;
}

/**
 * Wrapper for `page.show()` with SilverStripe specific behaviour.
 */
function show(page) {
  const pageShow = page.show;

  /**
   * When testing I get the following results
   * base: /admin
   * pre: admin/campaigns/set/4/show
   * normalised: /admin/campaigns/set/4/show
   *
   * This shoud do a nice ajax request, but it does a full page refresh instead??
   */

  return (path, state, dispatch, push) => {
    console.log("base: " + page.base());
    console.log("pre: " + path);
    path = page.normalise(path);
    console.log("normalised: " + path); // This does full page refreshes somehow???
    return pageShow(path, state, dispatch, push);
  };
}

/**
 * Checks if the passed route applies to the current location.
 *
 * @param string route - The route to check.
 *
 * @return boolean
 */
function routeAppliesToCurrentLocation(route) {
  const r = new page.Route(route);
  return r.match(page.current, {});
}

page.normalise = normalise.bind(page);
page.show = show(page);
page.routeAppliesToCurrentLocation = routeAppliesToCurrentLocation;

export default page;
