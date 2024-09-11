import MultiStepForm from '@/components/MultiStep';

// Define the type for the step object
interface StepProps {
  number: number;
  title: string;
  subtitle: string;
  isActive: boolean;
}

const steps: StepProps[] = [
  { number: 1, title: 'Your Info', subtitle: 'Step 1', isActive: true },
  { number: 2, title: 'Select Plan', subtitle: 'Step 2', isActive: false },
  { number: 3, title: 'Add-ons', subtitle: 'Step 3', isActive: false },
  { number: 4, title: 'Summary', subtitle: 'Step 4', isActive: false }
];

// Step component to represent each individual step
function Step({ number, title, subtitle, isActive }: StepProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`flex justify-center items-center h-10 w-10 rounded-full 
          ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`}
      >
        {number}
      </div>
      <div>
        <p className="text-sm font-semibold text-cool_gray">{subtitle}</p>
        <h2 className="font-bold uppercase text-white">{title}</h2>
      </div>
    </div>
  );
}

export default function FormPage() {
  return (
    <section className="flex flex-col md:flex-row p-5 gap-8 bg-white shadow-md rounded-2xl">
      {/* Sidebar with background image and steps */}
      <div className="bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover bg-center rounded-2xl p-8 w-full md:w-1/3">
        {/* Dynamically render steps */}
        <div className="flex flex-col gap-8">
          {steps.map((step) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              subtitle={step.subtitle}
              isActive={step.isActive}
            />
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-grow">
        <MultiStepForm />
      </div>
    </section>
  );
}
