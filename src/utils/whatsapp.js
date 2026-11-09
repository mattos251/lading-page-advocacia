export const WHATSAPP_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER ?? '').replace(/\D/g, '')

const DEFAULT_MESSAGE = 'Olá! Gostaria de obter informações sobre atendimento previdenciário.'

export function buildWhatsappUrl(message = DEFAULT_MESSAGE) {
  const text = encodeURIComponent(message)
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    : `https://wa.me/?text=${text}`
}
