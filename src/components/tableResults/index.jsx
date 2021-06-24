import React, { useState } from 'react'
import styles from './styles.module.css'
import Modal from '../modal';
import { format } from "date-fns";
import pt from "date-fns/locale/pt-BR";

export default function TableResults({ data }) {

    const [visible, setVisible] = useState(false);
    const [dataToModal, setDataToModal] = useState({});
    const [ordering, setOrdering] = useState(false);

    function dateOrder() {
        let array;
        if (ordering) {
            array = data.sort((obj1, obj2) => {
                if (+new Date(obj1.date) > +new Date(obj2.date)) {
                    return 1;
                } else if (+new Date(obj2.date) > +new Date(obj1.date)) {
                    return -1
                } else {
                    return 0
                }
            })
        } else {
            array = data.sort((obj1, obj2) => {
                if (+new Date(obj1.date) > +new Date(obj2.date)) {
                    return -1;
                } else if (+new Date(obj2.date) > +new Date(obj1.date)) {
                    return 1
                } else {
                    return 0
                }
            })
        }

        return array;
    }

    function switchModal() {
        setVisible(!visible)
    }

    function showModal() {
        if (visible === true) {
            return <Modal switchModal={switchModal} data={dataToModal} />
        }
    }

    return (
        <div className={styles.table}>
            <table >
                <thead className={styles.cabecaTabela}>
                    <tr>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>valor</th>
                        <th onClick={(() => setOrdering(!ordering))} >Data</th>
                    </tr>
                </thead>

                <tbody>
                    {dateOrder().map((transation, index) => {
                        return (
                            <tr key={index} onClick={() => {
                                switchModal()
                                setDataToModal(transation)
                            }}>
                                <td>{transation.title}</td>
                                <td>{transation.description}</td>
                                <td>{transation.status}</td>
                                <td>{transation.amount}</td>
                                <td>{format(new Date(transation.date), 'PP', { locale: pt })}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>

            </table>
            {showModal()}
        </div>
    )
}

//<h2> Não foram encontrado registros para o que você procura </h2>

/*
data*/