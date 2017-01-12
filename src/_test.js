/**
 * HAS CLASS?
 * Checks if element has a given class
 */

export const hasClass = (el, className) => {
    if (el.classList) {
        return el.classList.contains(className)
    } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className)
    }
}

/**
 * ADD CLASS
 */

export const addClass = (el, className) => {
    if (el.classList)
        el.classList.add(className)
    else
        el.className += ' ' + className

    return el
}

/**
 * REMOVE CLASS
 */

export const removeClass = (el, className) => {
    if (el.classList)
        el.classList.remove(className)
    else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')

    return el
}

/**
 * GET ALL DATA-ATTRIBUTES
 */

export const getDataAttributes = (el) => {
    const length = el.attributes.length
    const pattern = /^data-/
    const data = {}

    //Loop all attributes and check for data-
    for (let i = 0; i < length; i++) {
        const attribute = el.attributes[i]

        if(pattern.test(attribute.name)){
            const name = attribute.name.substr(5)
            const value = attribute.value
            if(value == 'true' || value == 'false')
                data[name] = value == 'true' ? true : false
            else
                data[name] = value
        }
    }

    return data
}

/**
 * EVENT DELEGATION
 * on - Add delegated event
 * off - Remove delegated event
 */

export const on = (el, evnt, selector, func) => {
    el.addEventListener(evnt, (e) => {
        let elem = e.target
        let match = false

        //Loop parents until match
        while (!match && elem !== el) {
            if(elem.matches(selector)) {
                match = elem
            }else{
                elem = elem.parentNode
            }
        }

        //Run callback if match is found
        if(match) {
            func(e, match)
        }
    })
}

/**
 * TRIGGER EVENT
 */

export const trigger = (el, e) => {
    const event = document.createEvent('HTMLEvents')
    event.initEvent(e, true, false)
    el.dispatchEvent(event)
}


/**
 * REGEX ESCAPE
 */

export const regexcape = (str) => {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
}
