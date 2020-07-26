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
	<a href="?page=Software Process Measurement Techniques">
	<img src="icons/engineering.png" class="img-fluid skill-icon" alt="skill icon">
	<p class="text-capitalize"><strong>Software Process Measurement Techniques</strong></p>
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
	
	<hr style="solid 5px #bbb"></hr>
	<div class="sm">
		<h2  class="sm"> Name of Skill </h2>
		Reengineering
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Classification of Skill </h2>
		Technical
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Prerequisites for Skill </h2>
		Programming  
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Related Software Engineering Area(s)  </h2>
		Software Quality,Software Testing,Software Configuration Management
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Rationale for Skill </h2>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm"><h2  class="sm"> Roles for Skill </h2>
		Requires skill to understand code written by others, helps to increase efficiency of the code.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Work Related to Skill </h2>
		Refactor, Reverse eng, code restructuring, forward eng,redocumentation
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Real-World Example </h2>
		taking a legacy sofware and adapting to mordern systems.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Role of Academia or Industry in Cultivating the Skill </h2>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm" > Tools Supporting the Skill </h2>

		<div class="row" style="padding-top:70px">
			
			<div class="column">
				<div class="card">
					<h4>Lighthouse</h4>
					<p>Description</p>
				</div>
			</div>

			<div class="column">
				<div class="card">
					<h4>Dependency analyzer</h4>
					<p>Description</p>
				</div>
			</div>

			<div class="column">
				<div class="card">
					<h4>Disassembler</h4>
					<p>Description</p>
				</div>
			</div>


			<div class="column">
				<div class="card">
					<h4>PE and HEX editors</h4>
					<p>Description</p>
				</div>
			</div>

		</div>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Skill Self-Assessment </h2>
		5
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> References </h2>
		<hr class="smSolid" ></hr>
	</div>	
`  
},
	{
		title: `Software Process Measurement Techniques`,
		description: `<hr border-top: 3px solid #bbb;></hr>
		<br>The evaluation of software processes is nowadays a
		very important issue due to the growing 
		interest of software companies in the improvement of the productivity and quality of delivered products. 
		Software measurement plays a fundamental role here. Given the great diversity of entities which are candidates 
		for measurement in the software process improvement context`,
		text: `
		<hr style="solid 5px #bbb"></hr>
		<div class="sm">
			<h2  class="sm"> Name of Skill </h2>
			Software Process Measurement Techniques
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Classification of Skill </h2>
			Quantitative Process Measurement Techniques
            Qualitative Process Measurement Techniques
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Prerequisites for Skill </h2>
			Technical experience, Project Management Experience
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Related Software Engineering Area(s)  </h2>
			Software Engineering Process.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Rationale for Skill </h2>
			 The purpose of quantitative process measurement techniques is to collect, transform, and analyze quantitative process and work product data that can be used to indicate where process improvements are needed and to assess the results of process improvement initiatives. Quantitative process measurement techniques are used to collect and analyze data in numerical form
			 to which mathematical and statistical techniques can be applied..
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm"><h2  class="sm"> Roles for Skill </h2>
			
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Work Related to Skill </h2>
			Project Manager,  Scrum Master, etc…
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Real-World Example </h2>
			TODO:
		</div>
		<div class="sm">
			<h2  class="sm"> Role of Academia or Industry in Cultivating the Skill </h2>
			TODO:
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm" > Tools Supporting the Skill </h2>
			<div class="row" style="padding-top:70px">
				
				<div class="column">
					<div class="card">
						<h4>GenMETRIC</h4>
						<p>Description</p>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<h4></h4>
						<p>Description</p>
					</div>
				</div>
			</div>
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Skill Self-Assessment </h2>
			
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> References </h2>
			TODO:
			<hr class="smSolid" ></hr>
		</div>	
		<a href="./index.html">Return Home</a>
		`,
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
		text: `
		<hr style="solid 5px #bbb"></hr>
		<div class="sm">
			<h2  class="sm"> Name of Skill </h2>
			Scheduling
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Classification of Skill </h2>
			Hard, Non-Technical.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Prerequisites for Skill </h2>
			Technical experience, critical thinking, anticipation skills.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Related Software Engineering Area(s)  </h2>
			Software Project Management, Software Developer, Risk management.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Rationale for Skill </h2>
			Time is a major concern in projects and in software projects its no different, being able to manage it through precise schedule can play an important role in project management giving the information needed to  provide solutions from risk management to providing all needs of the project across its life span.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm"><h2  class="sm"> Roles for Skill </h2>
			Requires skill to understand code written by others, helps to increase efficiency of the code.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Work Related to Skill </h2>
			Project Manager, Risk Manager, Scrum Master, etc…
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Real-World Example </h2>
			TODO:
		</div>
		<div class="sm">
			<h2  class="sm"> Role of Academia or Industry in Cultivating the Skill </h2>
			TODO:
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm" > Tools Supporting the Skill </h2>
			<div class="row" style="padding-top:70px">
				
				<div class="column">
					<div class="card">
						<h4>Microsoft Project</h4>
						<p>Description</p>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<h4>Monday.com</h4>
						<p>Description</p>
					</div>
				</div>
			</div>
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Skill Self-Assessment </h2>
			6
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> References </h2>
			TODO:
			<hr class="smSolid" ></hr>
		</div>	
		`,
	},
	{
		title: `Computing Foundations`,
		description: `Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
		text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
	},
	];
