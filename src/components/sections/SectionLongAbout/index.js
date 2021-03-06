import React, { createRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSectionEffects } from '../../hooks';
import { setPageStyle } from '../../../actions/page';

import './index.scss';
import Typography from '../../Typography';


const SectionLongAbout = () => {
  const ref = createRef();
  // const { scrollOverlayY } = useSectionEffects(ref);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if(scrollOverlayY >= -1 && scrollOverlayY < 1) {

  //     const color = 255 - ((scrollOverlayY + 1) / 2 * 255);
    
  //     dispatch(
  //       setPageStyle({
  //         backgroundColor: `rgba(${color},${color},${color})`,
  //       })
  //     );
  //   }
  // }, [ scrollOverlayY ]);

  // console.log('SectionLongAbout scrollOverlayY', scrollOverlayY);

  return (
    <section className='section-long-about' ref={ref}>
      <Typography>
        <h1>О сервисном центре</h1>

        <p>
          В&nbsp;нашем сервисном <a href='/'>центре</a> вы&nbsp;получите полное квалифицированное, после- гарантийное обслуживание и&nbsp;ремонт мобильных телефонов, смартфонов и&nbsp;планшетов марок Apple. Наши сторудники сами приедут к&nbsp;вам и&nbsp;проведут все работы на&nbsp;выезде, будь вы&nbsp;дома в&nbsp;офисе или отдыхате с&nbsp;друзьями, вам не&nbsp;придется прерывать свои дела и&nbsp;мчаться к&nbsp;мастерам.
        </p>

        <p>
          Все мы&nbsp;ценим наши гаджеты и&nbsp;уже не&nbsp;представляем наших будней без мобильников, ПК, лэптопов и&nbsp;планшетов. К&nbsp;сожалению, девайсы не&nbsp;застрахованы от&nbsp;непредвиденных неполадок и&nbsp;поломок. Сгорела видеокарта, разбился экран смартфона, гироскутер не&nbsp;заряжается или планшет не&nbsp;реагирует на&nbsp;прикосновения&nbsp;&mdash; такие сюрпризы огорчают и&nbsp;единственный кто может спасти наши дорогие сердцу гаджеты&nbsp;&mdash; это квалифицированный профессионал сервисцентра по&nbsp;восстановлению электронных устройств.
        </p>

        <p>
          Если с&nbsp;вами случилась эта напасть и&nbsp;вы&nbsp;ищите мастера осуществляющего ремонт техники в&nbsp;Москве&nbsp;&mdash; вы&nbsp;нашли его! Команда мастеров сервисного центра Aple911 спасет ваши гаджеты и&nbsp;реанимирует даже самый безнадежный &laquo;кирпич&raquo;. Мы&nbsp;предоставляем услуги по&nbsp;восстановлению портативных устройств, ведущих мировых брендов. У&nbsp;нас ваши друзья получат &laquo;лечение&raquo; от&nbsp;профи с&nbsp;многолетней практикой и&nbsp;гаджеты дальше будет радовать Вас своей работой еще долгие годы!
        </p>

        <p>
          Мы&nbsp;работаем в&nbsp;районах: Москва, Долгопрудный, Химки, Красногорск, Одинцово, Московский, Щербинка, Видное, Дзержинский, Котельники, Люберцы, Реутов, Балашиха, Мытищи, Жуковский, Раменское, Бронницы.
        </p>

        <p>
          Узнайте подробно О&nbsp;НАШИХ УСЛУГАХ.
        </p>
      </Typography>
    </section>
  );
};

export default SectionLongAbout;
