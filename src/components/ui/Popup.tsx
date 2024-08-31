'use client';

import { Close } from '@/public/images/svg';
import styles from '@/src/styles/Popup.module.scss';
import useStore from '@/src/store/store';

const Popup = () => {
  const { isPop } = useStore();
  const closePop = (e: React.MouseEvent<HTMLDivElement>) => {

  }

  return (
    isPop && (
      <div className={styles.dimmed} onClick={closePop}>
        <div className={styles.popup} role="dialog">
          <Close/>
          <input type="text" value="aaa" readOnly />
        </div>
      </div>
    )
  );
};

export default Popup;