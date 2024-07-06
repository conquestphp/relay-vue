import { usePage } from '@inertiajs/vue3'

export interface Translation {
    [key: string]: string
}

export default (key: string, replacements: Translation = {}): string => {
    let translation = (usePage().props.translations as Translation)[key] || key

    Object.entries(replacements).forEach(([replacement, value]) => {
        const regex = new RegExp(`:${replacement}`, 'g')
        translation = translation.replace(regex, String(value))
    })

    return translation
}