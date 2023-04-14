import {
  CarryOutOutlined,
  CarryOutTwoTone,
  GithubOutlined,
} from '@ant-design/icons'
import styles from './MainLogo.module.css'
import telegram from '../../assets/telegram.svg'

const githubUrl = 'https://github.com/hryashik/socnet-client'
const tgUrl = 'https://t.me/dmitriydultsev'

function MainLogo() {
  return (
    <div className={styles.main}>
      <div className={styles.main__links}>
        <div className={styles.link__block}>
          <GithubOutlined />
          <a target='_blank' href={githubUrl}>
            github.com/hryashik/todolist
          </a>
        </div>
        <div className={styles.link__block}>
          <img src={telegram} alt='' />
          <a target='_blank' href={tgUrl}>
            t.me/dmitriydultsev
          </a>
        </div>
      </div>
      <div className={styles.main__title}>
        <CarryOutOutlined />
        <h2>Todo app</h2>
      </div>
    </div>
  )
}

export default MainLogo
