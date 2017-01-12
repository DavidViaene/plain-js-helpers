/**
 * VANILLA JS HELPER LIBRARY
 * ---------------------------
 * Library containing vanilla JS helper functions instead of jQuery
 */

/**
 * INSERT AFTER
 */

export const insertAfter = (el, target) => {
    if(target.parentNode) {
        target.parentNode.insertBefore(el, target.nextSibling)
    }
}
