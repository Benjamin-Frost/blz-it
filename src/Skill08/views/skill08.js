import Container from "react-bootstrap/Container";

import Footer from "../../components/footer";
import SkillHeader from "../../components/skill-header";

function Skill08() {
  return (
    <div>
      <SkillHeader
        skillNumber="08"
        skillName="Mobile App Development"
        skillDescription="Die besten jungen Appentwickler Deutschlands werden gesucht"
      />
      <Container>
        <section className="py-4">
          <h3 className="h1 text-center pb-3">
            Teilnahme
            <wbr />
            bedingungen &amp; Notwendige Kenntnisse
          </h3>
          <h4>Alter</h4>
          <p className="lead text-justify">
            Du wirst im Wettbewerbsjahr der WorldSkills 2021 nicht älter als 22
            Jahre sein, d.h. Du bist Jahrgang 1999 oder jünger.
          </p>
          <h4>Tätigkeit/ Berufung</h4>
          <p className="lead text-justify">
            Deine ausgeübte Tätigkeit ist für die Teilnahme nicht entscheidend,
            d.h. Du bist z.B. SchülerIn oder StudentIn und programmierst sehr
            gern, schnell und gut, Du machst eine Ausbildung in einem der
            IT-Berufe oder bist gerade fertig mit Deiner Ausbildung.
          </p>
          <h4>Programmiererfahrung</h4>
          <p className="lead text-justify">
            Du beherrschst mindestens eine Programmiersprache, am besten Java
            oder Kotlin, programmierst Mobile Apps, hast Kenntnisse in UML und
            Datenbanken und verstehst englischsprachige Aufgabenstellungen.
          </p>
        </section>
        <section className="py-4">
          <h3 className="h1 text-center pb-3">
            Was erwartet mich bei der Endrunde der Deutschen Meisterschaft?
          </h3>
          <p className="lead text-justify">
            Hier werden an insgesamt drei Wettbewerbstagen in vier Sessions
            komplexe Anwendungen im Desktopbereich und mobilen Apps
            programmiert. Als Entwicklungs
            <wbr />
            umgebungen/
            <wbr />
            Programmier
            <wbr />
            sprachen sind bei der Endrunde der Deutschen Meisterschaft für
            Desktop-Anwendungen aber nur noch Visual Studio 2019 mit C# und für
            die App-Programmierung Xamarin bzw. Android Studio mit Java bzw.
            Kotlin sowie der Microsoft SQL Server zugelassen.
          </p>
        </section>
        <section className="py-4">
          <h3 className="h1 text-center pb-3">
            Wie geht es bei einer erfolgreichen Teilnahme nach der Deutschen
            Meisterschaft weiter?
          </h3>
          <p className="lead text-justify">
            Das dreiköpfige Deutsche Nationalteam im Skill 08, bestimmt durch
            die Ergebnisse bei der Endrunde der Deutschen Meisterschaft, wird
            durch unser Trainerteam in mehreren Trainingslagern und online auf
            die weiteren Wettbewerbe vorbereitet. Beim internationalen
            Wettbewerb um den{" "}
            <a
              href="https://youtu.be/2efmjwRr_KI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Albert-Einstein-Cup
            </a>{" "}
            in Neubrandenburg im Mai 2021 tritt dann das dreiköpfige
            Nationalteam gegen die besten Softwareentwickler Europas an. Im
            Ergebnis dieser Veranstaltung wird dann endgültig der/die deutsche
            TeilnehmerIn für die{" "}
            <a
              href="https://youtu.be/xW7qDTpRY-g"
              target="_blank"
              rel="noopener noreferrer"
            >
              WorldSkills Shanghai 2021
            </a>{" "}
            bestimmt.
          </p>
        </section>
        <section className="py-4">
          <h3 className="h1 text-center pb-3">Was sind die WorldSkills?</h3>
          <p className="lead text-justify">
            WorldSkills-Wettbewerbe vergleichen viele mit den olympischen
            Spielen. Nur eben bei den Berufen. Sie sind ein einzigartiges und
            unvergessliches Erlebnis für alle, die schon einmal daran
            teilgenommen haben. Die WorldSkills sind das weltweit größte
            Ereignis der beruflichen Bildung und finden alle zwei Jahre statt.
            2019 waren die WorldSkills in Kasan/Russland. Mehr als 1350 junge
            Menschen aus über 60 Ländern wetteiferten dort in mehr als 50
            Ausbildungsberufen um die Medaillen. Die Deutsche Nationalmannschaft
            war in Kasan in 34 Wettbewerbsdisziplinen sehr erfolgreich
            vertreten, darunter auch im Skill 08 (
            <a
              href="https://youtu.be/7N-nfLzHy3c"
              target="_blank"
              rel="noopener noreferrer"
            >
              hier
            </a>{" "}
            ein Video zu den Highlights der WorldSkills Kasan 2019). Schon vier
            Jahre zuvor in São Paulo belegte Mario Lüttecke in unserer Disziplin
            einen hervorragenden vierten Platz. In Abu Dhabi 2017 gewann der
            damals erst 17-jährige Schüler Jonas Wanke mit Bronze sogar die
            erste deutsche Medaille in einem IT-Beruf. In Kasan wurde unser
            Teilnehmer, Benjamin Frost, Weltmeister in der Teildisziplin
            „Speedprogramming“.
          </p>
        </section>
        <section className="py-4">
          <h3 className="h1 text-center pb-3">WorldSkills Germany</h3>
          <p className="lead text-justify">
            <a
              href="https://www.worldskillsgermany.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WorldSkills Germany
            </a>{" "}
            – das ist die Förderinitiative für nationale und internationale
            Berufswettbewerbe. Die Inititiative vereint Engagement und Ideen von
            derzeit rund 80 Mitgliedern, Partnern, Förderern, Unternehmen,
            Verbänden und Privatpersonen. Der 2006 gegründete Verein WorldSkills
            Germany ist die national und international anerkannte
            Mitgliedsorganisation von WorldSkills International und WorldSkills
            Europe.
          </p>
        </section>
        <section className="py-4">
          <h3 className="h1 text-center pb-3">Ansprechpartner</h3>
          <p className="lead text-justify">
            Jonas Wanke WorldSkills Experte/Bundestrainer Skill 08 – Mobile App
            Development <br />
            E-Mail:{" "}
            <a href="mailto:worldskills@jonas-wanke.com">
              worldskills@jonas-wanke.com
            </a>
          </p>
        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default Skill08;
