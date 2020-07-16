const pageNotFoundMessage = `
  <div class="col-10">
    <h2 class="pb-3">Page Not Found</h2>
    <p>
      <a href="./index.html">Return Home</a>
    </p>
  </div>
  `;

const content = [
  {
    title: `Home Page`,
    description: `TODO: Description`,
    text: `
    <div class="row justify-content-center text-center">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
        <a href="?page=Software Design">
          <img src="icons/research.png" class="img-fluid skill-icon" alt="skill icon">
          <p class="text-capitalize"><strong>Software Design</strong></p>
        </a>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
        <a href="?page=Software Quality">
          <img src="icons/file.png" class="img-fluid skill-icon" alt="skill icon">
          <p class="text-capitalize"><strong>Software Quality</strong></p>
        </a>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
        <a href="?page=Software Maintenance">
          <img src="icons/code.png" class="img-fluid skill-icon" alt="skill icon">
          <p class="text-capitalize"><strong>Software Maintenance</strong></p>
        </a>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
        <a href="?page=Software Engineering Process">
          <img src="icons/engineering.png" class="img-fluid skill-icon" alt="skill icon">
          <p class="text-capitalize"><strong>Software Engineering Process</strong></p>
        </a>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
        <a href="?page=Software Testing">
          <img src="icons/test.png" class="img-fluid skill-icon" alt="skill icon">
          <p class="text-capitalize"><strong>Software Testing</strong></p>
        </a>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
        <a href="?page=Software Requirements">
          <img src="icons/text.png" class="img-fluid skill-icon" alt="skill icon">
          <p class="text-capitalize"><strong>Software Requirements</strong></p>
        </a>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
        <a href="?page=Software Engineering Management">
          <img src="icons/influencer.png" class="img-fluid skill-icon" alt="skill icon">
          <p class="text-capitalize"><strong>Software Engineering Management</strong></p>
        </a>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
        <a href="?page=Computing Foundations">
          <img src="icons/problem.png" class="img-fluid skill-icon" alt="skill icon">
          <p class="text-capitalize"><strong>Computing Foundations</strong></p>
        </a>
      </div>
    </div>
    `,
  },
  {
    title: `About Us`,
    description: `Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
    text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
  },
  {
    title: `Software Design`,
    description: `Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
    text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
  },
  {
    title: `Software Quality`,
    description: `Lorem3 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
    text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
  },
  {
    title: `Software Maintenance`,
    description: `Lorem4 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
    text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
  },
  {
    title: `Software Engineering Process`,
    description: `Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
    text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
  },
  {
    title: `Software Testing`,
    description: `Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
    text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
  },
  {
    title: `Software Requirements`,
    description: `Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
    text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
  },
  {
    title: `Software Engineering Management`,
    description: `Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
    text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
  },
  {
    title: `Computing Foundations`,
    description: `Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
    text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
  },
];
