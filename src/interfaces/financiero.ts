export interface CIFinanciero {
    contrato_detalles: ContratoDetalles
    con_derivados: ConDerivado[]
    rubros: Rubro[]
  }
  
  export interface ContratoDetalles {
    contrato_interadministrativo: string
    nombre_interadministrativo: string
    objeto_contrato: string
    cliente: string
    centro_de_costos: string
    valor_honorarios: string
    valor: string
    porcentaje_honorarios: string
    plazo: string
  }
  
  export interface ConDerivado {
    codigo_derivado: string
    cliente: string
    supervisor: string
    valor_total: string
    pago_total: string
  }
  
  export interface Rubro {
    rubro: string
    nombre_rubro: string
    contrato_interadministrativo: string
    anos_unicos: string | undefined[]
    total_apropiacion_inicial?: string
    total_apropiacion_definitiva?: string
    detalles: Detalle[]
  }
  
  export interface Detalle {
    apropiacion_inicial?: number
    apropiacion_definitiva?: number
    cdp?: number
    disponible?: number
    comprometido?: number
    pagos?: number
    por_comprometer?: number
    por_pagar?: number
    ano?: string
  }
  