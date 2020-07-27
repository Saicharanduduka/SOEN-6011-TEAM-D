const pageNotFoundMessage = `
<div class="col-10">
<h2 class="pb-3">Page Not Found</h2><hr style="solid 5px #bbb"></hr>
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
	description: `<hr border-top: 3px solid #bbb;></hr><br>Lorem4 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
	text: `
	
<h2>Index</h2>
<div class="box" id="index">
	<ul>
		<li><a href="#nos">1. Name of Skill.</a></li>
		<li><a href="#cos">2. Classification of Skill.</a></li>
		<li><a href="#pfs">3. Prerequisites for Skill.</a></li>
		<li><a href="#rsfea">4. Related Software Engineering Area(s).</a></li>
		<li><a href="#rafs">5. Rationale for Skill. </a></li>
		<li><a href="#rofs">6. Roles for Skill.</a></li>
		<li><a href="#wrts">7. Work Related to Skill.</a></li>
		<li><a href="#rwe">8. Real-World Example/Scenario of Skill.</a></li>
		<li><a href="#roai">9. Role of Academia or Industry in Cultivating the Skill.</a></li>
		<li><a href="#tsts">10. Tools Supporting the Skill.</a></li>
		<li><a href="#ssa">11. Skill Self-Assessment.</a></li>
		<li><a href="#r">12. References.</a></li>
	</ul>	
</div>


	<div class="sm" id="nos">
		<h2  class="sm"> <a href="#index"> Name of Skill</a> </h2><hr style="solid 5px #bbb"></hr>
		
		Reengineering
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="cos">
		<h2  class="sm"> <a href="#index">Classification of Skill </a></h2>
		<hr style="solid 5px #bbb"></hr>
		Technical
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="pfs">
		<h2  class="sm"> <a href="#index">Prerequisites for Skill</a> </h2>
		<hr style="solid 5px #bbb"></hr>
		Programming  
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rsfea">
		<h2  class="sm"><a href="#index"> Related Software Engineering Area(s) </a> </h2>
		<hr style="solid 5px #bbb"></hr>
		<ul class="sm">
			<li>Software Quality</li>
			<li>Software Testing</li>
			<li>Software Configuration Management</li>
		</ul>

		
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rafs">
		<h2  class="sm"> <a href="#index">Rationale for Skill</a> </h2>
		<hr style="solid 5px #bbb"></hr>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rofs">
		<h2  class="sm"> <a href="#index">Roles for Skill </a></h2>
		<hr style="solid 5px #bbb"></hr>
		Requires skill to understand code written by others, helps to increase efficiency of the code.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="wrts">
		<h2  class="sm"> <a href="#index">Work Related to Skill </a></h2>
		<hr style="solid 5px #bbb"></hr>
		<ul class="sm">
			<li>Refactor</li>
			<li>Reverse eng</li>
			<li>Code restructuring</li>
			<li>Forward eng</li>
			<li>Redocumentation</li>
		</ul> 
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="rwe">
		<h2  class="sm"><a href="#index">Real-World Example</a></h2>
		<hr style="solid 5px #bbb"></hr>
		taking a legacy sofware and adapting to mordern systems.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="roai">
		<h2  class="sm"> <a href="#index">Role of Academia or Industry in Cultivating the Skill</a> </h2>
		<hr style="solid 5px #bbb"></hr>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="tsts">
		<h2  class="sm" > <a href="#index">Tools Supporting the Skill </a></h2>
		<hr style="solid 5px #bbb"></hr>

		<div class="row" style="padding-top:50px">
			
			<div class="column">
				<a href="">
				<div class="card">
					<h4>Lighthouse</h4>
					<p>Description</p>
				</div>
					
				</a>
			</div>

			<div class="column">
				<a href="">
					<div class="card">
					<h4>Dependency analyzer</h4>
					<p>Description</p>
				</div>

				</a>
			</div>

			<div class="column">
				<a href="">
					<div class="card">
						<h4>Disassembler</h4>
						<p>Description</p>
					</div>					
				</a>
			</div>


			<div class="column">
				<a href="">
				<div class="card">
					<h4>PE and HEX editors</h4>
					<p>Description</p>
				</div>					
				</a>
			</div>

		</div>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="ssa">
		<h2  class="sm"><a href="#index"> Skill Self-Assessment</a> </h2>
		<hr style="solid 5px #bbb"></hr>
		5
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm" id="r">
		<h2  class="sm"> <a href="#index">References </a></h2>
		<hr style="solid 5px #bbb"></hr>
		<hr class="smSolid" ></hr>
	</div>	
`  
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
