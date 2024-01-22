<template>
  <div class="notifications current_page">
    <div class="container mt-4 mb-4">
      <div v-if="lang == 'en'">
        <h2 class="mb-4">About Us</h2>
        <p>
          Welcome to algorithimia, where innovation meets excellence in the world of software solutions. At algorithimia,
          we are dedicated to crafting cutting-edge software that empowers businesses, enhances user experiences, and drives technological advancements.
        </p>
          <h3><strong>Our Mission:</strong></h3>
          <p>
            Our mission is to revolutionize the digital landscape by delivering exceptional software
            solutions that transform the way businesses operate and individuals engage with technology.
             We strive to be at the forefront of innovation, consistently pushing the boundaries of what is possible in the realm of software development.
          </p>
          <h3><strong>Who We Are:</strong></h3>
          <p>
            algorithimia is a team of passionate and skilled professionals with diverse expertise in software engineering,
            design, and project management. We bring together a wealth
            of experience and a shared commitment to delivering high-quality, scalable, and secure software products.
          </p>
          <h3><strong>Core Values</strong></h3>
          <ul>
            <li>
              <strong>Innovation : </strong>We embrace creativity and continuously seek innovative solutions. We foster a culture that encourages curiosity, learning, and staying ahead of industry trends.
            </li>
            <li>
              <strong>Quality : </strong>Our commitment to quality is unwavering. We adhere to the highest standards in software development, ensuring that our products are robust, reliable, and meet the evolving needs of our clients.
            </li>
            <li>
              <strong>Collaboration : </strong>We believe in the power of collaboration. By working closely with our clients and within our team, we cultivate an environment that promotes open communication, mutual respect, and shared success.
            </li>
            <li>
              <strong>Customer-Centric : </strong>Our clients are at the heart of everything we do. We listen attentively to their needs, understand their challenges, and tailor our solutions to exceed their expectations.
            </li>
          </ul>
      </div>
      <div v-else>
        <h2 class="mb-4">من نحن</h2>
        <p>
          مرحبًا بك في الجورزميا، حيث تلتقي الابتكارات بالتفوق في عالم حلول البرمجيات. في [اسم شركتك]، نكرس جهودنا لصياغة برمجيات متقدمة تمكّن الشركات، وتعزز تجارب المستخدمين، وتدفع بالتقدم التكنولوجي.

        </p>



        <h3><strong>مهمتنا:</strong></h3>
        <p>

          مهمتنا هي أن نحدث ثورة في المشهد الرقمي من خلال تقديم حلول برمجية استثنائية تحول طريقة عمل الشركات وتعزز تفاعل الأفراد مع التكنولوجيا. نسعى جاهدين لنكون في طليعة الابتكار، محركين باستمرار حدود ما هو ممكن في مجال تطوير البرمجيات.
        </p>
        <h3><strong>من نحن:</strong></h3>
        <p>

          الجورزميا هي فريق من المحترفين الملتزمين والمتحمسين بخبرة متنوعة في هندسة البرمجيات والتصميم وإدارة المشاريع. نجمع بين ثروة من الخبرات والتزام مشترك بتقديم منتجات برمجية عالية الجودة وقابلة للتوسع وآمنة.

        </p>
        <h3><strong>القيم الأساسية
        </strong></h3>
        <ul>
          <li>
            <strong>الابتكار : </strong>نحن نحتضن الإبداع ونسعى باستمرار للعثور على حلول مبتكرة. نعزز ثقافة تشجيع الفضول والتعلم والبقاء في طليعة اتجاهات الصناعة.
          </li>
          <li>
            <strong>الجودة : </strong>لتزامنا بالجودة لا يتزعزع. نلتزم بأعلى المعايير في تطوير البرمجيات، مضمونين أن منتجاتنا قوية وموثوقة وتلبي احتياجات عملائنا المتطورة.
          </li>
          <li>
            <strong>التعاون : </strong>نؤمن بقوة التعاون. من خلال العمل الوثيق مع عملائنا وضمن فريقنا، نحن نعزز بيئة تعزز من التواصل المفتوح واحترام الآراء والنجاح المشترك
          </li>
          <li>
            <strong>التوجه نحو العميل : </strong>عملاؤنا هم في قلب كل ما نقوم به. نستمع بانتباه إلى احتياجاتهم، ونفهم تحدياتهم، ونقدم حلاً مخصصًا يتجاوز توقعاتهم
          </li>
        </ul>

      </div>

      <pre v-else></pre>
    </div>
  </div>
</template>

<script>
import WordsLang from "../mixins/WordsLang";
export default {
  name: 'about-us',
  mixins:[WordsLang],
  data(){
    return {
      lang:'ar',
    }
  },
  head() {
    return {
      title: 'من نحن | about us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'تعريف بموقع الوصف الوظيفي ومن صاحب الفكرة ومن مؤسسة ومزيد من المعلومات الاخري',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'about us , من نحن ',
        }
      ],

    }
  },

  mounted() {
    if(localStorage.hasOwnProperty('lang') && localStorage.lang == 'en'){
      this.lang = 'en';
    }
  }
}
</script>

<style lang="scss">
@import "~style/variables";
ul{
  li{
    margin-bottom: 10px;
  }
}
</style>
