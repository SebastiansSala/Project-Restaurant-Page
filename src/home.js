export const renderHome =  (() => {
    const home = document.createElement('div');
    home.innerHTML = `
    <div class="container">
    <div class="header">
      <nav>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a routerLink="#menu" href='#menu'>Menu</a></li>
        </ul>
      </nav>
    </div>

    <section class="main" id='home'>
      <div class="intro">
        <div class="intro-flex">
          <p class="title">
            TACOS
          </p>
          <h3>
            Restaurant
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
          </p>
          <button mat-raised-button style="background-color: #c9ab81;" (click)=" openLoginDialog()">Reserva YA!</button>
        </div>
      </div>
    </section>
  </div>
    `
    return home
});