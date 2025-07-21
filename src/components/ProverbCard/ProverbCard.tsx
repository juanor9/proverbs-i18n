import { useTranslation } from 'react-i18next';
import './ProverbCard.scss';

const ProverbCard = () => {
  const proverbData = {
    text: "Más vale pájaro en mano que ciento volando",
    language: "Español",
    code: "es",
    literal: "Better a bird in hand than a hundred flying",
    culturalEquivalents: [
      {
        language: "Inglés",
        code: "en",
        text: "A bird in the hand is worth two in the bush"
      },
      {
        language: "Francés",
        code: "fr",
        text: "Un tiens vaut mieux que deux tu l’auras"
      },
      {
        language: "Japonés",
        code: "ja",
        text: "捕らぬ狸の皮算用"
      }
    ],
    region: "España",
    category: "Sabiduría popular",
    usage: "Se utiliza para recomendar conformarse con lo que ya se tiene asegurado, en vez de arriesgarse por algo incierto.",
    fact: "Este refrán aparece en textos españoles desde el siglo XV. Su versión en inglés es tan antigua como Shakespeare, y muchas culturas tienen variantes que contraponen lo seguro frente a lo incierto."
  }
  const { t, i18n } = useTranslation('proverbs');
  console.log("🚀 ~ ProverbCard ~ i18n:", i18n)


  return (
    <article className="proverb-card" aria-labelledby='proverb'>
      <h3 id='proverb' className='proverb-card__proverb'>{t('card.title', { proverb: proverbData.text })}</h3>
      <div>
        <p><span className='proverb-card__heading'>{t('card.language')}</span>{proverbData.language}</p>
        {proverbData.code !== i18n.language && (
          <p>
            <span className='proverb-card__heading'>{t('card.literal')}</span>
            <i>{proverbData.literal}</i>
          </p>
        )}
      </div>
      <div>
        <h4>{t('card.cultural_equivalents')}</h4>
        <ul>
          {proverbData.culturalEquivalents.map(eq => (
            <li key={eq.language}>
              <span className='proverb-card__heading'>{eq.language}</span>
              <i lang={eq.code}>{eq.text}</i>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4>{t('card.context')}</h4>
        <p><span className='proverb-card__heading'>{t('card.region')}</span>{proverbData.region}</p>
        <p><span className='proverb-card__heading'>{t('card.category')}</span>Sabiduría popular</p>
        <p><span className='proverb-card__heading'>{t('card.usage')}</span>
          {proverbData.usage}
        </p>
      </div>
      <div>
        <h4>{t('card.did_you_know')}</h4>
        <p>{proverbData.fact}</p>
      </div>
    </article >
  )
}

export default ProverbCard;