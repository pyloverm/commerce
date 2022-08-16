import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);


export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const lang = req.headers.locale;
      var lang_url = '/'.concat(lang);
      if (lang === 'en'){
        lang_url = '/en-US'
      }
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        locale: lang,
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_address_collection: {allowed_countries: ['FR','PT']},
        shipping_options: [
          { shipping_rate: 'shr_1LUyqXBb7RwAdRQ6YJbetHRK' },
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/nplh2uil/production/').replace('-webp', '.webp');

          return {
            price_data: { 
              currency: 'eur',
              product_data: { 
                name: item.name[lang],
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled:true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}${lang_url}/success`,
        cancel_url: `${req.headers.origin}${lang_url}/canceled`,
      }

      // Create Checkout Sessions from body params.
      console.log(lang)
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

