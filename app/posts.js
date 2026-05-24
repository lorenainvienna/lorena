export const posts = [
  {
    id: 'first-35th-morning',
    title: 'The first 35th Morning',
    date: new Date('2026-05-23'),
    excerpt: '',
    content: `I woke up early. A tickling sensation on my right forearm and the bright sunlight were my first sensations.

A sudden realization came in and stablished itself in my head quite firmly: I was immensely grateful. The tingling sensation came from my cat, Leo. He was comfortably positioned close to me, softly purring as he usually does some mornings lately.

The purring was provoked by Andreas gently scratching him. He was lying next to me with his unique, calm and warm presence, with closed eyes, almost scratching the cat on autopilot. I glanced at his face and felt this fullness in my belly, the man that I love is next to me with our cat in the middle. I wake up this Saturday turning 35 and I have to say I'm the luckiest, most thankful person right now.

I realize my blessings, I woke up in my apartment, healthy, with a long weekend ahead, employed, with a loving partner, with my cats around, in the city I chose to live in, with loving friends and with the though of my mom and my sister that, although far away, would have me in their minds today.

My eyes teared up and I immediately reached out to gently take Leo to the other side of the bed so I can hold Andreas. He opened his pretty eyes and wished me a happy birthday with a sleepy voice while extending his arm to welcome my closeness. It needs to be known that lying on this shoulder is my absolute favorite place in the entire world. Nowhere do I feel safer, warmer, more comfortable or just overall better. This man knows me inside out and loves me for who I am; he has constantly chosen me and his never-ending acts of love have proven over a span of 7 years that he's fully, devotedly there for me.

I hold Leo close to the other side of my body and just take this moment in. The journey to this very point has been anything but easy; I feel accomplished, I feel I wouldn't like to be anywhere else, with nobody else, being somebody else. That this is my life and that I love it. It's a beautiful morning.`
  }
]

export function getPost(id) {
  return posts.find(post => post.id === id)
}

export function getAllPosts() {
  return posts.sort((a, b) => b.date - a.date)
}
