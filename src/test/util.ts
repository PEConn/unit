export function hasTextContent(text: string) {
    return (content?: string, element?: Element | null) => {
        if (!element || !element.textContent) return false;

        return element.textContent.includes(text);
    }
}