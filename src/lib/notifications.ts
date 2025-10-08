'use server';

type NotifyPayload = {
    id: string;
    name: string;
    message: string;
    category: string;
    createdAt: string;
};

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

export async function notifyNewIntention(payload: NotifyPayload) {
    const apiKey = process.env.RESEND_API_KEY;
    const recipients = process.env.INTENTIONS_NOTIFY_TO;
    const fromEmail =
        process.env.INTENTIONS_NOTIFY_FROM || 'Carlo Acutis Bot <no-reply@carloacutis.net.ar>';

    if (!apiKey || !recipients) {
        return;
    }

    const toList = recipients
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);

    if (toList.length === 0) {
        return;
    }

    const html = `
        <h2>Nuevo pedido de oración pendiente de moderación</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Categoría:</strong> ${escapeHtml(payload.category)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${formatMessage(payload.message)}</p>
        <p><small>ID de la intención: ${payload.id}</small></p>
        <p><small>Fecha: ${new Date(payload.createdAt).toLocaleString()}</small></p>
    `;

    const text = [
        'Nuevo pedido de oración pendiente de moderación',
        `Nombre: ${payload.name}`,
        `Categoría: ${payload.category}`,
        'Mensaje:',
        payload.message,
        `ID: ${payload.id}`,
        `Fecha: ${new Date(payload.createdAt).toLocaleString()}`,
    ].join('\n');

    try {
        await fetch(RESEND_ENDPOINT, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: fromEmail,
                to: toList,
                subject: 'Nueva intención en el muro Carlo Acutis',
                html,
                text,
            }),
        });
    } catch (error) {
        console.error('Failed to send notification email', error);
    }
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatMessage(value: string) {
    return escapeHtml(value).replace(/\n/g, '<br />');
}
