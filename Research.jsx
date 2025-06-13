import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Zap, Droplets, Wind, Thermometer, Cpu } from 'lucide-react';

// 导入研究图片
import thermalSimulation from '../../assets/research/thermal_simulation.jpg';

const Research = () => {
  const researchAreas = [
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: '传热传质基础理论',
      description: '研究传热传质的基本机理，发展新的理论模型和分析方法。',
      details: [
        '微纳尺度传热机理研究',
        '多相流传热传质理论',
        '非平衡态传热过程分析',
        '界面传热传质现象'
      ],
      image: thermalSimulation,
      applications: ['电子器件散热', '新能源材料', '生物传热']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '热电转换技术',
      description: '开发高效的热电材料和器件，实现热能与电能的直接转换。',
      details: [
        '热电材料设计与制备',
        '热电器件结构优化',
        '热电系统集成技术',
        '废热回收利用'
      ],
      image: thermalSimulation,
      applications: ['汽车废热回收', '工业余热利用', '便携式发电']
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: '传热强化技术',
      description: '研究各种传热强化方法，提高换热设备的性能和效率。',
      details: [
        '表面强化传热技术',
        '纳米流体传热',
        '微通道传热',
        '相变传热强化'
      ],
      image: thermalSimulation,
      applications: ['换热器设计', '电子冷却', '建筑节能']
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: '多相流传热',
      description: '研究气液两相流、固液两相流等复杂流动中的传热传质现象。',
      details: [
        '沸腾传热机理',
        '凝结传热过程',
        '颗粒流传热',
        '泡状流传热'
      ],
      image: thermalSimulation,
      applications: ['核反应堆', '化工设备', '能源系统']
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: '计算传热学',
      description: '发展先进的数值方法，进行复杂传热问题的数值模拟。',
      details: [
        'CFD方法开发',
        '多尺度建模',
        '并行计算技术',
        '人工智能应用'
      ],
      image: thermalSimulation,
      applications: ['工程设计', '优化分析', '预测建模']
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      title: '新能源热管理',
      description: '针对新能源系统的热管理需求，开发相应的技术和解决方案。',
      details: [
        '电池热管理系统',
        '燃料电池传热',
        '太阳能热利用',
        '储能系统热控制'
      ],
      image: thermalSimulation,
      applications: ['电动汽车', '储能电站', '太阳能发电']
    }
  ];

  const researchHighlights = [
    {
      title: '微纳尺度传热机理突破',
      description: '在微纳尺度传热机理研究方面取得重要进展，相关成果发表在Nature Nanotechnology上。',
      impact: '为微电子器件热管理提供理论基础',
      year: '2024'
    },
    {
      title: '高性能热电材料开发',
      description: '成功开发出新型热电材料，热电优值ZT达到国际先进水平。',
      impact: '推动热电发电技术产业化应用',
      year: '2023'
    },
    {
      title: '智能传热强化技术',
      description: '结合人工智能技术，开发出自适应传热强化方法。',
      impact: '显著提升换热设备效率',
      year: '2023'
    }
  ];

  const facilities = [
    {
      name: '传热实验室',
      description: '配备先进的传热测试设备，可进行各种传热实验研究。',
      equipment: ['激光干涉仪', '红外热像仪', '高精度温度测量系统', '流量测量设备']
    },
    {
      name: '材料制备实验室',
      description: '具备完整的材料制备和表征设备，支持新材料研发。',
      equipment: ['真空熔炼炉', 'X射线衍射仪', '扫描电镜', '热分析仪']
    },
    {
      name: '计算中心',
      description: '高性能计算集群，支持大规模数值模拟计算。',
      equipment: ['GPU计算节点', '并行计算软件', 'CFD软件包', '可视化系统']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* 页面标题 */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            研究内容
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            聚焦热质传递与热系统关键技术问题
          </motion.p>
        </div>
      </section>

      {/* 研究方向 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              主要研究方向
            </h2>
            <p className="text-lg text-gray-600">
              围绕热质传递与热系统的核心科学问题，开展多层次、多尺度的研究
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40" />
                  <div className="absolute top-4 left-4 text-white">
                    {area.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">研究内容</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {area.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">应用领域</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 研究亮点 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              研究亮点
            </h2>
            <p className="text-lg text-gray-600">
              近年来在重要研究方向取得的突破性进展
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-purple-600 text-sm font-medium mb-2">
                  {highlight.year}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 mb-4">{highlight.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-500">
                    <strong>影响：</strong>{highlight.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 实验设施 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              实验设施
            </h2>
            <p className="text-lg text-gray-600">
              先进的实验设备为科研工作提供强有力支撑
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {facility.name}
                </h3>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">主要设备</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {facility.equipment.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 合作交流 */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              合作交流
            </h2>
            <p className="text-xl opacity-90">
              与国内外知名高校和科研院所建立了广泛的合作关系
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'MIT', type: '国际合作' },
              { name: 'Stanford', type: '学术交流' },
              { name: '中科院', type: '联合研究' },
              { name: '北京理工大学', type: '协同创新' }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold">{partner.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold mb-1">{partner.name}</h3>
                <p className="text-sm opacity-75">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Research;

