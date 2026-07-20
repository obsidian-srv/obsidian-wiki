---
title: 💵 Банк
description: Ну там можно АРы складывать... передавать и т.д.
---

# 💵 Банк

<span class="hover-text-test">Ну там можно АРы складывать... передавать и т.д.</span>

## Игровая часть

Кажется данная система уже стала базой для многих серверов, поэтому быстренько пройдемся по функционалу  
Бегать на спавн к банкиру? Что за чушь? Открой меню с помощью команды <span class="inline-badge badge-purple">**/bank**</span>
<figure>
  <img src="/bankmenu.png" alt="Гифка с сайта" style="width: 600px">
  <figcaption>Главное меню банка</figcaption>
</figure>

В данном меню есть 3 главные менюшки  
Первое меню: `Додеп или Раздеп` - где можно узнать свой баланс, пополнить или снять АРы со своего счета
<figure>
  <img src="/bankdraw.png" alt="Гифка с сайта" style="width: 600px">
  <figcaption>Меню пополнения и снятия</figcaption>
</figure>

Второе меню: `История` - тут можно узнать все транзакции со своим счетом _(пополнения, снятия, переводы, оплата штрафов)_ и их подробное описание  
<figure>
  <img src="/bankhistory.png" alt="Гифка с сайта" style="width: 600px">
  <figcaption>Меню транзакций</figcaption>
</figure>

Третье меню: `Штрафы` - вы напакостили и вам выписали штраф? Он отобразиться именно здесь. Тут же можно узнать причину штрафа, кто выписал и до какой даты надо оплатить
<figure>
  <img src="/bankpenalty.png" alt="Гифка с сайта" style="width: 600px">
  <figcaption>Меню штрафов</figcaption>
</figure>

Также банк был бы бесполезен, если был бы создан только для хранения денег, поэтому присутствует возможность перевода АРов другим людям

<span class="inline-badge badge-purple">**/bank pay <ник игрока> <сумма АРов>**</span> - поможет вам дать кому-нибудь на пропитание

## Управление в Discord
<span class="hover-text-test">Посмотрев на опыт других серверов, было принято решение повторить и это тоже :0</span>

ObsidianBOT создан, чтобы взаимодействовать с игрой через дискорд и тут он нам тоже поможет  
<span class="inline-badge badge-purple">**/balance**</span> - покажет нынешний баланс счета, к которому привязан игрок
<figure>
  <img src="/bankdiscordbalance.png" alt="Гифка с сайта" style="width: 600px">
  <figcaption>Демонстрация команды /balance</figcaption>
</figure>

<span class="inline-badge badge-purple">**/pay <юзер> <сумма АРов>**</span> - поможет перевести АРы не заходя в игру
<figure>
  <img src="/bankdiscordpay.png" alt="Гифка с сайта" style="width: 600px">
  <figcaption>К сожалению администратор нищий</figcaption>
</figure>

<span class="inline-badge badge-purple">**/penalties**</span> - покажет неоплаченные штрафы
<figure>
  <img src="/bankdiscordpenalty.png" alt="Гифка с сайта" style="width: 600px">
  <figcaption>Администрация не нарушает правила!</figcaption>
</figure>



