import { ITermsBtn, ITermsContent } from "../interfaces/terms";

export const TERMSBUTTON: ITermsBtn[] = [
  {
  id: 1,
  label: 'USO DEI DATI',
  url: 'data-use'
  },
  {
    id: 2,
    label: `LICENZA D'USO`,
    url: 'license'
  },
  {
    id: 3,
    label: 'LIMITAZIONI',
    url: 'limitations'
  }
]


export const TERMSCONTENT: ITermsContent[] = [
  {
    id: 1,
    title: 'USO DEI DATI',
    content: `L'utente concorda che con l'accesso al gioco è vincolato a questi termini e condizioni d'uso, nonchè a tutte le le leggi e regolamenti vigenti e che è responsabile per l'adempimento di quanto citato.    Nel caso non si sia d'accordo, è vietato l'accesso al gioco.
    I materiali contenuti nel gioco sono protetti da diritto di autore e marchio registrato.

    Ci riserviamo il diritto di alterare in qualsiasi momento i Termini e le Condizioni d'Uso così come le Politiche di Privacy.

    Utilizzare il gioco dopo la pubblicazione delle modifiche a questa politica verrà considerato come adesione a queste modifiche.`
  },
  {
    id: 2,
    title: `LICENZA D'USO`,
    content: `Viene concesso il permesso per trasferire momentaneamente una copia dei materiali di gioco con lo scopo di visualizzarla per uso personale e non commerciale. Questa è una concessione di una licenza, non un trasferimento di titolo, ed in base a questa licenza non puoi:

    - cercare di decompilare o decodificare qualsiasi software contenuto nel gioco;

    - rimuovere qualsiasi diritto d'autore o altre marche di proprietà dei materiali;

    - trasferire materiali per altre persone o rispecchiare i materiali in qualsiasi altro server.

    Questa licenza termina automaticamente nel caso venga violata anche soltanto una di queste restrizioni e potrai essere escluso dal sito in qualsiasi momento. Dopo aver terminato di vedere questi materiali o dopo la rescissione di questa licenza, dovrai distruggere tutti i materiali in tuo possesso, sia in formato elettronico che cartaceo.`
  },
  {
    id: 3,
    title: 'LIMITAZIONI',
    content: `In nessun caso il gioco o i suoi fornitori sranno responsabili per qualsiasi danno. Anche se il gioco o un rappresentante autorizzato di esso ricevesse notifica verbale o scritta riguardante la possibilità di tali danni. Includendo ma non limitando:

    - danni dovuti alla perdita di dati o al profitto;

    - danni dovuti all'interruzione di servizi temporanei o permanenti causati da manutenzione o problemi tecnici;

    - danni per utilizzo o incapacità di usare i materiali del nostro gioco.

    Non accettiamo nessuna responsabilità per links inviati da terzi. L'inclusione di questi links non significa che siamo responsabili per il materiale o per il contenuto di questi sisti web. Non siamo responsabili per qualsiasi perdita, danno o confusione sofferta dall'utente durante il gioco.`
  }
]
