import React from 'react';

import { Heart, Camera, Baby, Sparkles, Image as ImageIcon, Printer } from 'lucide-react';

export const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPduxQ8OKTH7kPBSoqGrpiIKZqSt_pAoO0l-7A5jqpbVbS4ORH2gbFjlmDEj0CBE4rJL0REIq0L7CghqVb-ODpPHbrvQEEmHavJPCf7hIY642v4Vyd0htrHYrQKFqPkMC6Xpx62ee-RTA29q_cGt-vJ2GTqFrrtF3zyBNd_It7tjE_O930SI0bV9jySTNTYtTQfGmKBDInkY6BqBc7nYwyeW72nHFMJfwEwLOg2fHdUw9USTNkqgcLwbgPkOT7URh-bynY7JSyPbo",
  weddingBack: "https://lh3.googleusercontent.com/aida-public/AB6AXuD03zjvtEwlbUqQWgV_izckPmXL3m-D_upWB3k_jwbYqg8TOeXWKdmbCM4XUIhWJEqZGvT7TUT6aASyhLQ7-VOi3D8wb53ir3loFqJv6_InC1Oo6rSOHsu7ENiwIC7w834vSzq41dqZMNoIdnEQQUlZKOIp0uf1JS5tCF2sWBQ2KqXBpAtgldnqnZvun-3f-jVGbNVxN_DG_t4rbe5zA6cqSrbY6Z_7uLlDpDOEvyhADmZ3cRe-wzdAIkr5aEHgtkW8CI-uvFNt-lg",
  abstract: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGve6glMMdwVvKP2Na6znjUKscv8iBPtKDLxjRy_WrGlqZFTzvm9lJylvSgDccSRE-KHB5d2p1jUpuMUtAxCFIiD6MrGK0-UOpCx_N2wrdpDhOFZuzzlTmXmbgWxwHyXdSeKp9i1q1QMpkhg6-ZxDVYphRvyVk0fM4mpwaN3_hJZ1WWta3ze6hBTVDbOzAMy6EsqM5KC3byfd4WODvkPT9Xh1GaFqnc9Q7hY4TJyBSGKft-c0ZmQrtYHtnGDTuzZBETALr01w9fH8",
  portrait: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgI_J49c0IY2nt0ph_s_k-kdN2uMY7_dEG85xwVQflmWVd5rSy6YCV0feXAvGgYjvIEpSmmC6xaZPJzTujM0KRD9YAzbjNo6-GPNrCvIiY2UT5_8rIXqIFpoy0xLgeaJM0M_DiithkANCNsBlRikER2sPL5IomLe7pExBAkQO6KgDSvz56nkZp1UNeB4pWNMkYNEU3KYvoPZkxxBY2eyW-u4Y8E15wgUftC4ivoknRU0f0eFiJk6YKUeIo0VahlqzyWWcOPd0MV9Y",
  portraitDark: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEVG_f3Qu7j6e-sL83OD8Z4eipg3BIqT4cOlACzcERg3aAlEO64eNWhOS9-0Anhso_dJuKojW5fyIXyvFpD249FEwFAfBkyPnWdr8U-qy1wPTfJMOeBbAtr6TfToTL8oXzvORCvpsUHCBoDhzP3hCcP9Rq7njd0SK5ilNIrUI_POgqrwEBS6dAUpIjd6YZQqtjDIMaUwaeeoKZmV7MD9OSP5N41JKq6e81WUjUt6rLMy_r1Ut8IfizejqPpC_1QCkVbbbSlE9D9sw",
  landscape: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG8TpsGgTr1__5n4Or4FKZl6LlANdBzZ1IPuWyj8WutfUhCVubXocVVks8tVlbLTcgQOJCl18S9t0ZcxAsrlaTR__skZ-LbyMkqngLlqY_DPnfBrYQEkfudCCECibrxBqqHAkIPdn8Hcd8iKnzarrGI4avis9WBQ6O63zt6171wHRO5rSm3d2k4cr0uWpTkczh7khr3r4MHOxutp6LIomkl2DKNS_Jtv3zQ32XZDLokoM2uKhplWCPfADBQy_vcpwsCWH2BZ2ncZ8",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDOIo5rUMQoxGET5r4cUbZAub4chGLQIFzE9HaTLm-Edn3XYjsEW4ByVg6DowoslfvwPFxnqHZsSQSpCKufa-7EXfcdW_GuYfiLY-aYmDpCKYVIneZBhT--0AfXNXD4qLm3gIwvQl9TRFbrxYwn-6V-W00a-r-FsyAWeYgYhSDmy1SyH-SD3ejC9xwIxBIDKIwItrS8ZQVK9dY-utju351l5uQkybMCu8taCBZijcS9dTEiyZI50PRsxyeaULU96l7LR1EHJbJGDo"
};

export const SERVICES = [
  { 
    title: 'Wedding Photography', 
    desc: 'Intimate whispers captured in a style that feels like a classic novel, where every glance is a sentence.', 
    icon: Heart, 
    color: 'bg-rose', 
    iconColor: 'text-pink-600',
    shape: 'book-shape-1', 
    img: IMAGES.weddingBack 
  },
  { 
    title: 'Pre-Wedding Shoot', 
    desc: 'Before the "I do", let\'s capture the anticipation and pure romance in breathtaking locations.', 
    icon: Camera, 
    color: 'bg-sky', 
    iconColor: 'text-blue-600',
    shape: 'book-shape-2', 
    img: IMAGES.landscape 
  },
  { 
    title: 'Newborn Baby', 
    desc: 'The softest breaths and tiniest toes, preserved in watercolor hues of innocence and joy.', 
    icon: Baby, 
    color: 'bg-mint', 
    iconColor: 'text-emerald-600',
    shape: 'book-shape-3', 
    img: IMAGES.abstract 
  },
  { 
    title: 'Candid & Modeling', 
    desc: 'The ordinary made extraordinary. Authentic smiles captured in the warm glow of natural light.', 
    icon: Sparkles, 
    color: 'bg-lavender', 
    iconColor: 'text-purple-600',
    shape: 'book-shape-1', 
    img: IMAGES.portrait 
  },
  { 
    title: 'Product Photography', 
    desc: 'Showcase your creations with light and shadow that tell their own compelling story.', 
    icon: ImageIcon, 
    color: 'bg-peach', 
    iconColor: 'text-orange-600',
    shape: 'book-shape-2', 
    img: IMAGES.portraitDark 
  },
  { 
    title: 'Photo Printing', 
    desc: 'Tangible memories crafted with premium archival quality materials to last generations.', 
    icon: Printer, 
    color: 'bg-rose', 
    iconColor: 'text-rose-600',
    shape: 'book-shape-3', 
    img: IMAGES.hero 
  },
];

export const TESTIMONIALS = [
  {
    name: "Julian & Sophia",
    text: "LoveLoom Lens didn't just capture our day; they painted our emotions with such gentleness. It's like looking into a storybook we lived.",
    avatar: IMAGES.avatar
  },
  {
    name: "Marcus & Elena",
    text: "Every frame feels like a whispered secret. They have a way of finding the magic in the mundane.",
    avatar: "https://picsum.photos/seed/couple1/200/200"
  },
  {
    name: "David & Clara",
    text: "Professional, yet so warm. They felt like old friends who just happened to be world-class artists.",
    avatar: "https://picsum.photos/seed/couple2/200/200"
  },
  {
    name: "Leo & Mia",
    text: "The colors, the light, the composition... it's all so dreamlike. We couldn't have asked for a better anthology of our love.",
    avatar: "https://picsum.photos/seed/couple3/200/200"
  },
  {
    name: "Oliver & Grace",
    text: "They captured the quiet moments that we didn't even realize were happening. Truly ethereal.",
    avatar: "https://picsum.photos/seed/couple4/200/200"
  },
  {
    name: "Ethan & Lily",
    text: "A masterpiece in every sense. Our wedding album is our most prized possession.",
    avatar: "https://picsum.photos/seed/couple5/200/200"
  }
];

export const WhatsappIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.048c0 2.12.554 4.189 1.605 6.006L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.634 0 12.045-5.413 12.048-12.05a11.8 11.8 0 00-3.536-8.509z" />
  </svg>
);
