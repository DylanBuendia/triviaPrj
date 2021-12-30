import { IPrivacyButton, IPrivacyDescription } from "../interfaces/privacy";

export const privacyButtons:IPrivacyButton[] = [
    {
       id: 1,
       label: "USO DEI DATI",
       url: "data-use"
    },

    {
        id: 2,
        label: "COOKIES",
        url: "cookies"
    },

    {
        id: 3,
        label: "ALTRE DISPOSIZIONI",
        url: "disp"
    }

]


export const privacyDescriptions:IPrivacyDescription[] = [
    {
        id: 1,
        title: "USO DEI DATI",
        description: `In questa Politica della Privacy, per 'dati' intendiamo dati che raccogliamo soltanto per finalità di analisi inerenti la natura del Servizio e interessi per finalità di marketing.
        Dati che potremmo raccogliere durante il tuo utilizzo del Servizio: 
        - dati come identificativo numerico univoco (ID) e nickname vengono raccolti unicamente quando accedi a un servizio di social network per giocare una partita. La durata di validità dell'archiviazione corrisponde al tempo strettamente necessario in cui la lobby rimane attiva, dopo di che tutti i dati raccolti vengono eliminati;
        - dati come la posizione, il tipo di dispositivo, il sistema operativo, la piattaforma in uso, la versione del browser in uso sul computer, la versione di sistema operativo, i tempi di caricamento della pagina, la rete, le informazioni sull'identificatore del dispositivo generato, l'ID univoco del browser, l'origine riferimento e l'indirizzo IP.`
    },

    {
        id: 2,
        title: "COOKIES",
        description: `Gartic Phone può usare 'cookies' per migliorare l'esperienza dell'utente. Questi cookies sono essenziali per aiutare il tuo dispositivo a scaricare dati o trasmettere informazioni e perché tu possa navigare attraverso i Servizi.
        Qui abbiamo alcuni esempi dei modi in cui usiamo cookies strettamente necessari:
        
        - Mantenere la sessione attiva;
        - Permettere che tu possa navigare attraverso i Servizi senza problemi;
        - Perchè appaia annuncio contestuale basato sui tuoi interessi.`
    },

    {
        id: 3,
        title: "ALTRE DISPOSIZIONI",
        description: `I nostri servizi non sono direttamente rivolti a bambini. Se sei un utente con meno di 13 anni, non sei autorizzato ad utilizzare i nostri Servizi.`
    }
]