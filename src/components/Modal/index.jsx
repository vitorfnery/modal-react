import { useState } from "react";
import "./styles.css";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button className="btn-modal" onClick={toggleModal}>
        Open
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              dolorum earum nostrum amet porro nesciunt repudiandae eveniet.
              Sapiente quo rerum dolore pariatur animi culpa dolor non magnam
              earum aperiam aut corrupti exercitationem quae similique, libero
              eum tempora dicta! Consectetur dicta quisquam ad recusandae
              repellendus deleniti, doloremque voluptate fugiat quibusdam
              mollitia?
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
        doloribus quae sequi expedita neque minima facere similique tenetur
        voluptas itaque. Molestiae illo voluptatum, magni tenetur deleniti
        perferendis ea amet voluptas aperiam quisquam non fugiat officia culpa.
        Modi beatae ad ipsam sunt numquam, explicabo officia unde eligendi.
        Inventore, magnam molestias laboriosam cupiditate cumque illum minima
        sit tempore amet repellat eligendi, esse voluptate debitis dicta!
        Possimus quidem eius illum ipsum aliquam eaque, atque amet corporis qui
        doloribus ad officia maxime excepturi commodi necessitatibus velit
        nostrum neque minus, quaerat voluptatum. Dolorum exercitationem non,
        voluptates quo esse corporis dolore enim vitae fugiat cumque excepturi
        deleniti neque deserunt iusto dicta explicabo amet doloremque incidunt
        repudiandae odit nostrum. Id assumenda repudiandae asperiores quos earum
        fugiat rem dicta quam vitae, atque sunt porro! Nisi labore inventore sed
        velit odio aliquid harum? Perspiciatis illo eum fugiat voluptatem quos
        ea enim minima officia ullam eius, omnis similique aut exercitationem
        eaque quasi deserunt distinctio iusto unde ratione nulla neque beatae
        doloribus ipsum sint? Aspernatur repellat atque facere voluptatem veniam
        consectetur explicabo sequi dignissimos quae quas beatae, blanditiis
        repudiandae aut autem illo? Dolorum dolore, culpa provident quaerat,
        quod minima ratione tempore deleniti repellat qui perferendis ipsam
        magni mollitia iusto facere ut. Ex, repudiandae sit quod aliquam alias
        expedita accusamus possimus excepturi animi sint obcaecati consectetur
        aut deleniti exercitationem facilis fugiat at soluta! Explicabo odio
        inventore dolore totam, quae reprehenderit, consequuntur nostrum
        perferendis quas repellat non quidem quod corrupti autem asperiores in
        numquam maiores? Fugiat, eum natus voluptatum recusandae maiores et
        deserunt reprehenderit repudiandae! Nam, facilis sint. Et neque maxime
        error doloribus at, nihil quo commodi quas voluptas impedit quisquam ex
        qui perspiciatis ipsa earum quis quae accusantium possimus sed mollitia
        autem, dolores amet. Voluptate fugit voluptatibus dolor distinctio,
        nobis a reiciendis provident? Sapiente rerum repellendus veniam
        laboriosam nostrum, omnis dolorum possimus deserunt perspiciatis
        dignissimos quos numquam et eos dolores! Tempore quasi ea corporis atque
        harum amet, est pariatur sunt excepturi, hic ab obcaecati eaque.
        Incidunt, aliquam autem? Assumenda ducimus commodi quo mollitia sit
        impedit, nihil saepe molestias est, porro aspernatur deleniti earum
        tempora temporibus voluptates vel! Nihil, laboriosam? Consequatur
        doloremque, vel quia quis eius optio et earum debitis minima odit quod
        possimus nulla dolor vitae eligendi id accusantium accusamus at. Vero
        assumenda numquam qui autem veritatis excepturi odio quos quae! Natus
        corporis provident alias soluta omnis expedita deleniti veniam
        consectetur inventore. Ducimus aliquam ullam maxime laudantium natus
        voluptas quam quas possimus hic corporis suscipit sed, quaerat commodi
        eos facilis veniam libero nisi dolores qui sapiente. Sunt enim, unde
        tenetur dolor quam reiciendis ratione reprehenderit perspiciatis
        voluptatum voluptatem numquam quo inventore accusantium, corporis
        consectetur sint eius! Tenetur voluptate et possimus laboriosam mollitia
        tempora odit, id, architecto enim sunt quos corrupti sint eaque quia?
        Voluptatibus eaque voluptate eos distinctio consectetur omnis nobis
        assumenda atque quibusdam pariatur, sequi debitis eum vero laboriosam
        excepturi quam. Quaerat culpa nihil ullam quos omnis reiciendis ea
        nulla, neque commodi iste dolores facilis. Incidunt, mollitia doloremque
        at soluta nobis eveniet eaque tempora, assumenda totam voluptate
        dolorem, impedit sint? At non, aspernatur praesentium assumenda
        voluptatum eos? Cum dolorem quae dolores laborum ullam assumenda
        molestias veritatis, odit, amet, sit dolor doloremque ipsa iusto
        accusamus non eveniet? Itaque rem debitis amet nesciunt, sed, et,
        quibusdam numquam repellat a veritatis enim. Voluptatem, aut. Eos
        mollitia tempora harum maiores quaerat tempore numquam doloribus
        cupiditate est. Quia optio iusto repudiandae provident, veniam itaque
        aperiam commodi, expedita adipisci corrupti recusandae nostrum
        voluptatibus quos corporis veritatis officia quisquam vero? Error, quod
        quas. Laboriosam nihil odit animi consequatur laudantium aspernatur
        ipsum dolor. Optio, nesciunt consectetur. Cupiditate in quasi alias
        voluptatibus asperiores est sequi laboriosam, tenetur accusantium. Vero,
        quas facilis repellat, voluptas sed totam eum nostrum magnam, eveniet
        optio officiis expedita natus consectetur blanditiis fugiat omnis
        aliquid ab harum eaque neque sunt atque nam! Quasi totam quisquam
        reiciendis. Explicabo provident necessitatibus nostrum voluptatum fugit
        doloribus saepe, odio sit? Obcaecati reprehenderit suscipit pariatur.
        Distinctio provident totam asperiores nesciunt, laboriosam eius corporis
        mollitia consectetur tempora amet rem consequuntur iste harum earum
        dolore blanditiis qui in id? Sint autem inventore iure voluptas,
        quibusdam omnis impedit minus ab dolorem aperiam aspernatur obcaecati
        veniam harum explicabo? Nobis eligendi eveniet distinctio, inventore
        quaerat nemo, ab ipsum a, numquam reiciendis consequuntur quidem natus!
        Veritatis, minima recusandae obcaecati officia tempore ad id saepe.
        Rerum quia nostrum iste magni! Esse officia vitae facilis veritatis quo
        iusto eius nemo nisi dignissimos recusandae, asperiores optio expedita,
        atque voluptatum vero exercitationem ipsam aperiam quasi unde eum ab!
        Saepe necessitatibus odio doloribus ipsa unde amet corrupti, nam quo
        blanditiis, deserunt praesentium harum? Distinctio quia neque totam, in
        culpa autem nihil ex exercitationem eius alias dolore reprehenderit, aut
        debitis nulla quidem voluptatibus deleniti ratione porro voluptatem
        laudantium sit. Ut fugiat modi ad nisi maiores, architecto voluptate
        nulla possimus animi est. Molestiae autem quis eius expedita deleniti,
        error optio temporibus et ratione voluptatem. Est officia dicta
        molestiae voluptatibus facere praesentium ratione eum facilis ipsum,
        omnis dolorem in provident nisi error ducimus. Veritatis nobis cumque
        aperiam natus, ducimus necessitatibus possimus placeat exercitationem.
        Similique, repellat accusantium nostrum hic explicabo, modi quaerat
        repellendus minima saepe doloremque reiciendis perferendis suscipit
        vitae mollitia architecto quasi, sint quos dolorem corporis harum.
        Nesciunt ducimus, saepe perferendis at, vitae dolorum adipisci ex esse
        eaque inventore ullam. Maiores commodi dolor modi esse magnam sunt ad,
        exercitationem adipisci deleniti est accusamus rerum asperiores autem
        dolorem recusandae nam suscipit dolorum perferendis? Amet illo quo,
        culpa repellat quam quasi veritatis molestias nostrum ducimus. Ipsa
        veritatis at minima culpa a voluptates tenetur labore. Quas amet nostrum
        distinctio accusamus, numquam deserunt. In ullam nesciunt corrupti
        impedit aliquam reprehenderit a magni assumenda quia accusantium! Nobis
        facilis vitae corrupti exercitationem fugiat aliquid porro iure eius
        sapiente! Veniam pariatur, vero, at voluptate odio id impedit
        consequatur repellat est dolorum, commodi architecto molestias ut eos?
        Perferendis, doloremque. Possimus fugit, odit molestiae fuga voluptate
        accusamus dignissimos at, rem nihil totam veniam eos aperiam esse, eum
        animi. Id ex aliquam amet modi error debitis excepturi pariatur,
        doloribus vel ratione ipsa praesentium fuga ullam, quisquam expedita
        necessitatibus exercitationem temporibus rem sunt at esse. Voluptatibus
        debitis minus rem aperiam deserunt accusantium, porro, voluptatem hic
        repellat explicabo totam illum quos impedit ut enim vero, perferendis
        nulla inventore assumenda vel! Explicabo vitae perspiciatis, qui officia
        atque alias sit minima reiciendis eos reprehenderit odit perferendis
        excepturi neque labore nobis autem iure obcaecati sunt quod eum dolor
        rerum? Earum id sed odit commodi voluptatum, tempora itaque impedit
        accusamus cumque optio veniam aperiam iste in eveniet officia soluta?
        Minus doloremque corporis adipisci accusamus debitis, quaerat aliquam
        expedita asperiores dignissimos mollitia fugiat earum voluptates
        laudantium velit vero provident. Assumenda inventore fugit enim aliquid
        cumque nemo et neque architecto, eius debitis sequi eaque temporibus
        quasi. Veniam suscipit atque omnis ipsam quisquam numquam, magni
        consequuntur aliquid repudiandae minima possimus sit voluptate amet modi
        necessitatibus natus exercitationem rem error non neque impedit.
        Recusandae repellendus et nisi error voluptatum. Pariatur voluptas
        labore dolore tenetur ut quis cumque saepe maxime sunt ullam ipsum,
        optio sint itaque, laborum necessitatibus eos atque eveniet tempora
        quisquam molestiae suscipit aut voluptates? Voluptatem, alias omnis
        corporis numquam quod iste consequuntur similique dolore temporibus
        quibusdam, expedita dignissimos dicta, doloremque eos perferendis
        maiores eius. Quo, consectetur praesentium eaque minus error sequi
        omnis! Voluptate repellat corporis, necessitatibus optio laboriosam
        alias esse molestiae aliquid consectetur, perferendis cupiditate et
        delectus id ab quis, nostrum similique. Porro nisi, reprehenderit et
        quas ab odit! Itaque, ducimus ea commodi, nisi expedita exercitationem
        sed facere dolorum earum minima aperiam et eum, suscipit ab aspernatur
        culpa nam! Amet, corporis? Officia voluptatibus numquam ad tempora
        repudiandae, error corporis perspiciatis a. Nulla doloremque animi
        tempora sint alias? Sequi voluptates ullam architecto consectetur
        eligendi! Quo, quibusdam a, sed libero quia tenetur quam ullam corporis
        labore delectus non consequatur quidem quasi sunt dignissimos eveniet
        suscipit rerum. Aliquid neque alias, veritatis cupiditate deserunt,
        nihil doloremque aut optio harum repellat, voluptatum minus? Sunt
        reiciendis eveniet quos aperiam officiis porro corporis ipsam eligendi
        voluptate obcaecati, provident quidem consectetur facilis distinctio
        culpa dicta omnis accusantium. Facere qui facilis ab sint neque pariatur
        ut non quod repudiandae? Officiis hic molestiae, amet cumque doloribus
        quae alias unde porro. Voluptas pariatur alias cupiditate repellendus
        quam? Ad iure, cumque aspernatur nesciunt sit inventore esse. Ullam unde
        laudantium dolorum excepturi, nostrum quidem id veniam accusamus
        quibusdam atque dicta nesciunt suscipit quaerat ipsum distinctio laborum
        magnam deserunt vero fuga. Recusandae deserunt iure nisi earum dolor
        repellendus adipisci, a reprehenderit dolorem veritatis quisquam, atque
        libero quae, voluptate quibusdam tenetur delectus sed omnis inventore
        quas suscipit. Itaque consequatur cumque obcaecati omnis culpa aliquid
        reprehenderit ipsa nam enim quasi nesciunt incidunt vitae delectus eos,
        quam excepturi natus fugit et non a. Delectus totam voluptate sunt
        similique doloribus dignissimos, cumque explicabo iste accusantium hic
        sit dolorum ipsa enim expedita quae voluptatum possimus maiores
        molestias? Vitae iste fugiat officiis nobis ipsa amet molestiae!
        Exercitationem, sit! Minima illo doloribus doloremque aliquid voluptatum
        rerum, earum omnis praesentium necessitatibus perspiciatis dolores et ea
        ex consequatur ipsa ut? Tempora numquam doloribus, itaque minus ullam
        rerum neque sapiente! Harum non libero officiis ut totam soluta
        explicabo. Eaque ipsam ex id, ut molestiae perspiciatis, nesciunt modi
        cumque quis laboriosam illum praesentium voluptas veritatis explicabo
        dolorem aspernatur quaerat iste. Pariatur unde officiis, quo architecto
        necessitatibus, porro odio, voluptatibus velit commodi rerum animi culpa
        amet dolorem reprehenderit quos est aliquam sed sapiente nihil
        recusandae ipsam maxime. Ipsa recusandae repudiandae, neque alias
        aspernatur amet architecto? Eligendi hic voluptatibus, dolor beatae a
        neque fugiat magni similique maxime rerum id non nam aut temporibus,
        odit nulla illum asperiores at error quos ad sint veniam voluptate
        eaque? Esse alias eius corporis veritatis necessitatibus delectus nobis.
        Ut sint quas sequi ratione dolores odit nobis temporibus, atque
        molestias, adipisci quis! Incidunt doloremque ab voluptatum dolorem
        deleniti consequatur, eum cupiditate expedita aspernatur illum dolores
        quos accusantium soluta eos rem similique sapiente asperiores fugiat.
        Suscipit dicta porro facere deleniti soluta, optio voluptatem quasi
        aliquam est doloremque! Esse fugit architecto iste odio? Temporibus
        magnam deleniti minus minima, labore tenetur tempora atque ipsam
        commodi! Minima soluta obcaecati minus eos consectetur ducimus at
        dignissimos asperiores, quae quam, vel provident. Reiciendis veniam
        fugit voluptatem odit, tempora perspiciatis ullam doloribus at
        perferendis. Unde at eveniet cumque fugit corrupti reprehenderit sunt?
        Expedita, in at, sequi veniam tenetur neque vero inventore voluptatem
        atque, reiciendis totam velit? Aliquid eos tempora iste aliquam magnam
        atque animi, praesentium tenetur, quis sequi dolorem hic optio nostrum
        accusamus cumque mollitia voluptatum distinctio quae sed assumenda
        laudantium molestias exercitationem illum. Officiis repellendus tenetur
        facilis laborum explicabo voluptate suscipit excepturi est? Blanditiis
        et sunt animi maxime tempore dolorum consequuntur fuga voluptatibus quo!
        Assumenda aut soluta dolores. Labore ad itaque quo consequatur quod
        maxime dolorum facere modi animi cumque provident officiis enim ipsa
        aperiam error perspiciatis illum ipsum tenetur, quidem numquam autem
        porro repudiandae laborum cum! Ipsam quam minima inventore, debitis
        reiciendis quia illum reprehenderit ipsum molestiae autem fuga veniam
        possimus dicta excepturi nisi aliquid nam magni impedit. Est, doloribus
        corrupti explicabo enim iusto eum soluta quam labore sapiente. Quas
        excepturi beatae nulla atque expedita earum laboriosam ad facilis!
        Explicabo aperiam reiciendis veniam quis iste pariatur architecto? Earum
        a, non consequatur quas commodi modi eveniet doloribus nihil
        necessitatibus saepe sunt iure id dolorem deleniti veniam? Quo dolores
        dicta, dignissimos commodi aut tempore, suscipit consequatur temporibus
        veniam repudiandae cum consequuntur iure! Quos autem doloremque
        deserunt, exercitationem maxime, dolores ex recusandae ducimus cumque at
        inventore quibusdam pariatur nobis earum ipsam corporis quaerat nulla.
        Fuga pariatur tenetur laboriosam, at, sed ut omnis eum soluta qui culpa
        dolores dignissimos quo natus quae et expedita labore rem excepturi
        facilis hic aut, inventore nesciunt! Aliquam, cumque! Dolorem, ratione
        mollitia error facilis ducimus consequuntur voluptatibus totam corrupti
        esse inventore unde harum delectus officiis in reprehenderit sunt
        pariatur culpa neque provident qui cum iusto asperiores. Blanditiis et,
        sit laborum error nisi similique, nihil repellat beatae optio molestiae
        ipsa ad inventore ducimus nulla eum, dicta rem aliquid architecto
        eveniet atque quis autem quo quidem recusandae. Velit fugit culpa totam
        deserunt, ut ullam voluptatum distinctio recusandae quod sint quos
        asperiores necessitatibus mollitia et. Nisi hic doloribus adipisci fuga
        nostrum, totam debitis, illo facere veritatis possimus itaque id impedit
        maiores vel voluptates voluptatibus?
      </p>
    </>
  );
};
export default Modal;
