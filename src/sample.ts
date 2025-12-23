import config from './content/config/config.json';

const social = config.social as Record<string, string | undefined>

const author = {
    name: config.author?.name || 'Angela',
    nickname: config.author?.nickname || 'angie',
    tiktok: social?.tiktok || '',
    ig: social?.instagram || '',
    x: social?.x || '',
    email: config.author?.email ? `mailto:${config.author.email}` : ''
}

const buy = {
    title: config.cta?.title || 'See on Github',
    link: config.cta?.link || '#'
}

const hero = {
    tagline: config.hero?.tagline || 'I build top notch',
    highlightWord: config.hero?.highlightWord || 'websites',
    description: config.hero?.description || 'Passionate UX Engineer & Designer',
    ctaText: config.hero?.ctaText || 'See portfolio',
    ctaLink: config.hero?.ctaLink || '/#work',
    profileImage: config.hero?.profileImage || ''
}

const tools = config.tools?.items || ['Advice', 'Resources', 'Tools']

const serviceSection = {
    heading: config.serviceSection?.heading || "Services we're providing",
    stats: config.serviceSection?.stats || [],
    services: config.serviceSection?.services || []
}

const portfolio = {
    heading: config.portfolio?.heading || 'My Portfolio',
    items: config.portfolio?.items || []
}

const reviews = {
    heading: config.reviews?.heading || "Here's what my clients are saying",
    testimonials: config.reviews?.testimonials || []
}

const callToAction = {
    title: config.callToAction?.title || '',
    description: config.callToAction?.description || '',
    buttonText: config.callToAction?.buttonText || '',
    buttonLink: config.callToAction?.buttonLink || '',
    enabled: config.callToAction?.enabled ?? false
}

export { author, buy, hero, tools, serviceSection, portfolio, reviews, callToAction }
