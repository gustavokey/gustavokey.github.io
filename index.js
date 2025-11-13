// Base
// ====
// function IsCheckBoxChecked();
// function GetElementById();

// Animation
// =========
// function AnimationsRestart();
// function AnimationTrigger();
// function AnimationObserverCallbackTyping();
// function AnimationObserverCallbackFadeUp();
// function AnimationLoadTriggers();

// Misc
// ====
// function LanguageSwitch();


// 00. Globals
// ===========
const element_about_header = GetElementById("about_header");


// 01. Function Definitions
// ========================
function AnimationsRestart( element )
{
  var animations = element.getAnimations();

  for ( const index in animations )
    animations[ index ].currentTime = 0;

};

function IsCheckBoxChecked( id )
{
  return document.getElementById( id ).checked;
}

function GetElementById( id )
{
  return document.getElementById( id );
}

function AnimationTrigger(id, animation)
{
  var element;
  var Observer;

  if ( !id )
    return;

  element = GetElementById( id );

  Observer = new IntersectionObserver( animation )

  Observer.observe( element );

}

function AnimationObserverCallbackTyping(entries, observer)
{
  var entry = entries[0];
  const css_animation = "global_typing_animation";

  if ( entry.isIntersecting )
  {

    entry.target.classList.add( css_animation );
    observer.unobserve(entry.target);

  }

}

function AnimationObserverCallbackFadeUp(entries, observer)
{
  var entry = entries[0];
  const css_animation = "global_fade_in_up_animation";

  if ( entry.isIntersecting )
  {

    entry.target.classList.add( css_animation );
    observer.unobserve(entry.target);

  }

}

function AnimationObserverCallbackReveal(entries, observer)
{
  var entry = entries[0];
  const css_animation = "global_reveal";

  if ( entry.isIntersecting )
  {

    entry.target.classList.add( css_animation );
    observer.unobserve(entry.target);

  }

}

function AnimationLoadTriggers()
{
  AnimationTrigger( "about_header",  AnimationObserverCallbackTyping );

  AnimationTrigger( "skills_list_0", AnimationObserverCallbackFadeUp );
  AnimationTrigger( "skills_list_1", AnimationObserverCallbackFadeUp );
  AnimationTrigger( "skills_list_2", AnimationObserverCallbackFadeUp );
  AnimationTrigger( "skills_list_3", AnimationObserverCallbackFadeUp );
  AnimationTrigger( "skills_list_4", AnimationObserverCallbackFadeUp );

  AnimationTrigger( "reveal_0", AnimationObserverCallbackReveal );
  AnimationTrigger( "reveal_1", AnimationObserverCallbackReveal );
  AnimationTrigger( "reveal_2", AnimationObserverCallbackReveal );
  AnimationTrigger( "reveal_3", AnimationObserverCallbackReveal );
  //AnimationTrigger( "reveal_4", AnimationObserverCallbackReveal );
}

function LanguageSwitch()
{
  const toggled = IsCheckBoxChecked( 'language_toggle' );

  if ( toggled )
  {
    document.getElementById('navbar_link_0') .innerHTML = "Início";
    document.getElementById('navbar_link_1') .innerHTML = "Sobre Mim";
    document.getElementById('navbar_link_2') .innerHTML = "Projetos";

    document.getElementById('subtitle')      .innerHTML = "desenvolvedor backend.";

    document.getElementById('about_header')  .innerHTML = "./Capacidades";
    document.getElementById('text_animate')  .style.width = "33rem";

    document.getElementById('skills_list_0') .innerHTML = "» Arquitetura Java";
    document.getElementById('skill_java_0')  .innerHTML = "Spring Boot";
    document.getElementById('skill_java_2')  .innerHTML = "Microserviços";

    document.getElementById('skills_list_1') .innerHTML = "» Bancos de Dados";

    document.getElementById('skills_list_2') .innerHTML = "» Sistemas Integrados";
    document.getElementById('skill_embedded_0') .innerHTML = "Extração de Firmware";
    document.getElementById('skill_embedded_1') .innerHTML = "Kernel Patching";

    document.getElementById('skills_list_4') .innerHTML = "» Inglês & Alemão";
    document.getElementById('about_bio')     .innerHTML = "Eu sou um desenvolvedor apaixonado por tecnologia. Especializado em Arquitetura Java e sistemas de baixo nível.\
                                                           O meu auge é aprender cada vez mais sobre design de sistemas e hardware, assim então poder entregar projetos robustos para o usuário final.";
  }
  else
  {
    document.getElementById('navbar_link_0') .innerHTML = "Home";
    document.getElementById('navbar_link_1') .innerHTML = "About";
    document.getElementById('navbar_link_2') .innerHTML = "Projects";

    document.getElementById('subtitle')      .innerHTML = "backend developer.";

    document.getElementById('about_header')  .innerHTML = "./Skills";
    document.getElementById('text_animate')  .style.width = "15.2rem";

    document.getElementById('skills_list_0') .innerHTML = "» Java Arquitecture";
    document.getElementById('skill_java_0')  .innerHTML = "Spring Boot";
    document.getElementById('skill_java_2')  .innerHTML = "Microservices";

    document.getElementById('skills_list_1')    .innerHTML = "» Databases";

    document.getElementById('skills_list_2')    .innerHTML = "» Embedded Systems";
    document.getElementById('skill_embedded_0') .innerHTML = "Firmware Extraction";
    document.getElementById('skill_embedded_1') .innerHTML = "Kernel Patching";

    document.getElementById('skills_list_4') .innerHTML = "» English & German";
    document.getElementById('about_bio')     .innerHTML = "I'm a dedicated developer passionate about technology. Who specializes in Java Architecture principles and low level systems.\
                                                           I strive to always learn more about systems design and hardware, so that i'm able to ship robust projects to the end user.";
  }

}

// 02. Function Calls
// ==================
LanguageSwitch();
AnimationLoadTriggers();
