import React from 'react'

import style from './notice.module.scss'

const Notice = ({ styleNotice, text }) => {

  const win = styleNotice == 'win' && style.win;
  const lose = styleNotice == 'lose' && style.lose;
  const empty = styleNotice == 'empty' && style.empty;
  const farewell = styleNotice == 'farewell' && style.farewell;

  const noticeStyle = win || lose || empty || farewell || 'none';
  return (
    <section className={ `${style.notice} ${noticeStyle}` }
      dangerouslySetInnerHTML={{ __html: text }}>
    </section>
  )
}

export { Notice }