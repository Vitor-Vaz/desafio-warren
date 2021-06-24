import React from 'react'
import styles from './styles.module.css'
import { format } from "date-fns";
import pt from "date-fns/locale/pt-BR";

export default function Modal({ switchModal, data }) {

    function verifyStatus(status) {
        if (status === "created") {
            return styles.noloadedBar;
        } else if (status === "processing") {
            return styles.halfLoadedBar;
        } else if (status === "processed") {
            console.log("to aqui");
            return styles.fullloadedBar;
        }
    }


    return (
        <div className={styles.container}
            onClick={(e) => {
                if (e.target.className === styles.container) switchModal()
            }}>
            <div className={styles.box}>
                <button
                    className={styles.buttonClose}
                    onClick={() => switchModal()}
                >X</button>
                <h2>{data.title}</h2>
                <div className={styles.statusBox}>
                    <div className={styles.loadBar}>
                        <div className={verifyStatus(data.status)}> </div>
                    </div>

                    <div className={styles.statusSpans}>
                        <span>Created</span>
                        <span>Processing</span>
                        <span>Processed</span>
                    </div>
                    <p>Criado em {format(new Date(data.date), 'PPPp', { locale: pt })}</p> 
                    <div className={styles.dataTransfer}>
                        <div className={styles.boxFrom}>
                            <h4>Transferindo de</h4>
                            <hr size="1" width="100%" />
                            <p>{data.from}</p>
                            <span>{data.amount}</span>
                        </div>


                        <div className={styles.boxTo}>
                            <h4>Para</h4>
                            <hr size="1" width="100%" />
                            <p>{data.to}</p>
                            <span>{data.amount}</span>
                        </div>

                        <div className={styles.boxTo}>
                            <h4>Descrição</h4>
                            <hr size="1" width="100%" />
                            <p>{data.description}</p>
                        

                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}