import {
  Layers,
  Users,
  CheckCircle2,
  ShieldCheck,
  CalendarDays,
  Image as ImageIcon,
  ArrowRight,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900">
            Designed for Real Operational Teams
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
            IndoTask brings structure, accountability, and verification into
            daily task execution — built for stores, teams, and managers.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT: Workflow */}
          <div className="rounded-2xl border bg-white p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-blue-100 p-3">
                <Layers className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">
                Task-Based Workflow
              </h3>
            </div>

            <div className="flex items-center justify-between text-sm font-medium text-gray-700">
              <span className="rounded-full bg-yellow-100 px-4 py-2">
                Pending
              </span>
              <ArrowRight />
              <span className="rounded-full bg-orange-100 px-4 py-2">
                Verify
              </span>
              <ArrowRight />
              <span className="rounded-full bg-green-100 px-4 py-2">
                Completed
              </span>
            </div>

            <p className="mt-6 text-gray-600">
              Every task follows a clear lifecycle so nothing is missed,
              skipped, or falsely completed.
            </p>
          </div>

          {/* RIGHT: Team Boards */}
          <div className="rounded-2xl border bg-white p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-indigo-100 p-3">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold">
                Team-Wise Task Boards
              </h3>
            </div>

            <div className="flex gap-4">
              {["Store", "Team A", "Team B"].map((team) => (
                <div
                  key={team}
                  className="flex-1 rounded-xl border bg-slate-50 p-4 text-center"
                >
                  <p className="font-semibold">{team}</p>
                  <p className="mt-2 text-xs text-gray-500">
                    Pending · Verify · Done
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-gray-600">
              Separate boards per team give managers instant visibility into
              performance and bottlenecks.
            </p>
          </div>

          {/* LEFT: Role Verification */}
          <div className="rounded-2xl border bg-white p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-red-100 p-3">
                <ShieldCheck className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">
                Role-Aware Verification
              </h3>
            </div>

            <div className="flex gap-3">
              <span className="rounded-full bg-red-500 px-4 py-1 text-white text-sm">
                Manager Verify
              </span>
              <span className="rounded-full bg-blue-500 px-4 py-1 text-white text-sm">
                Admin Verify
              </span>
            </div>

            <p className="mt-6 text-gray-600">
              Admins decide who can verify tasks — managers, admins, or both —
              ensuring accountability.
            </p>
          </div>

          {/* RIGHT: Date + Image */}
          <div className="rounded-2xl border bg-white p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-lg bg-green-100 p-3">
                <CalendarDays className="h-6 w-6 text-green-600" />
              </div>
              <div className="rounded-lg bg-purple-100 p-3">
                <ImageIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">
                Date & Image Proof Tasks
              </h3>
            </div>

            <div className="flex gap-3 text-sm">
              <span className="rounded-lg border px-3 py-2">Today</span>
              <span className="rounded-lg border px-3 py-2">Tomorrow</span>
              <span className="rounded-lg border px-3 py-2">
                Pick Date
              </span>
            </div>

            <p className="mt-6 text-gray-600">
              Assign tasks by date and require image uploads as proof of work
              before approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
