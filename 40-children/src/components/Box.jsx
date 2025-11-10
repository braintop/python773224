import styles from './Box.module.css'
export default function Box({color,children}) {

  const colors = {
    red: 'red',
    blue: 'blue',
    green: 'green',
    yellow: 'yellow',
    purple: 'purple',
  }
    return (
      <div className={styles.box} style={{borderColor: colors[color] || 'pink'}}>
        {children}
      </div>
    );
  }