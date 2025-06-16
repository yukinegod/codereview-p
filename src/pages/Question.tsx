import NextQuestionButton from '@/features/QuestionNavigation/ui/NextQuestionButton'
import CodeExample from '@/shared/ui/CodeExample/ui/CodeExample'
import SeoKeysList from '@/shared/ui/SeoTags/ui/SeoKeysList'
import SophiPromoBlock from '@/shared/ui/SophiPromoBlock/SophiPromoBlock'
import Text from '@/shared/ui/Text/ui/Text'
import Footer from '@/widgets/Footer/ui/Footer'
import QuestionTitle from '@/widgets/QuestionTitle/ui/QuestionTitle'
import TopMenu from '@/widgets/TopMenu/ui/TopMenu'

type Props = {
  params: {
    id: string
  }
}

export default async function Question({ params }: Props) {
  const id = await params.id
  return (
    <div className='w-screen min-h-screen bg-white flex flex-col items-center pt-5'>
      <TopMenu type='arrow' buttonType='questionSimulator' href='/interviews' />

      <div className='mt-[176px] w-[1020px] flex gap-[60px]'>
        {/* левая колонка */}
        <div className='w-[660px] flex flex-col'>
          <QuestionTitle />
          <Text
            marginTop={30}
            text='В Java все аргументы метода передаются по значению, то есть копируется значение переменной (даже если она ссылочного типа). Однако у ссылочных переменных копируется лишь значение ссылки, а не объекта, на который она ссылается. Поэтому, если произойдет изменение состояния объекта, на который ссылается переданная ссылка, то эти изменения будут отражены на объекте, на который ссылается исходная переменная. Таким образом, то, что большинство людей называют "передачей по ссылке", на самом деле называется "передачей значения ссылки".'
          />
          <CodeExample
            title='Пример'
            lang='java'
            code={`public class Test {
    public static void main(String[] args) {
        StringBuffer str = new StringBuffer("hello");
        change(str);
        System.out.println(str);
    }
        
    public static void change(StringBuffer newStr) {
        newStr.append(" world");
    }
}`}
          />
          <Text
            marginTop={20}
            text='В этом примере метод change() принимает ссылку на объект StringBuffer и модифицирует его, добавляя к нему строку "world". В методе main() переменная str также ссылается на этот же самый объект StringBuffer, поэтому после вызова метода change() будет выведена строка "hello world".'
          />

          <SophiPromoBlock type='interviews' />
          <CodeExample
            marginTop={40}
            title='Дополнительный пример, который отражает js'
            lang='js'
            code={`"use strict";

document.addEventListener("DOMContentLoaded", function () {
  if (window.restaraunts && window.restaraunts.length > 0) {
    // Дожидаемся загрузки API Яндекс.Карт
    if (typeof ymaps === "undefined") {
      let script = document.createElement("script");
      script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      ymaps.ready(initMap);
    }
  }
});`}
          />
        </div>

        {/* правая колонка */}
        <div className='flex flex-col gap-[10px] w-[300px] h-[463px] bg-white'>
          <SophiPromoBlock type='interviewsSide' />
          <NextQuestionButton currentQuestionId={Number(id)} />
        </div>
      </div>
      <SeoKeysList type='question' />
      <Footer />
    </div>
  )
}
